'use server';

/**
 * @fileOverview Text moderation flow that identifies and flags sensitive PII
 * within uploaded modules, adhering to region-specific regulations.
 *
 * - moderateSensitiveData - A function that moderates text for sensitive data.
 * - ModerateSensitiveDataInput - The input type for the moderateSensitiveData function.
 * - ModerateSensitiveDataOutput - The return type for the moderateSensitiveData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModerateSensitiveDataInputSchema = z.object({
  text: z.string().describe('The text to moderate for sensitive PII.'),
  region: z
    .string()
    .optional()
    .describe(
      'The region to moderate the text for.  If not provided, defaults to US regulations.'
    ),
});
export type ModerateSensitiveDataInput = z.infer<
  typeof ModerateSensitiveDataInputSchema
>;

const ModerateSensitiveDataOutputSchema = z.object({
  hasSensitiveData: z
    .boolean()
    .describe(
      'Whether or not the text contains sensitive PII according to the specified region.'
    ),
  flaggedTerms: z
    .array(z.string())
    .describe('The list of sensitive terms that were flagged.'),
});
export type ModerateSensitiveDataOutput = z.infer<
  typeof ModerateSensitiveDataOutputSchema
>;

export async function moderateSensitiveData(
  input: ModerateSensitiveDataInput
): Promise<ModerateSensitiveDataOutput> {
  return moderateSensitiveDataFlow(input);
}

const moderateSensitiveDataPrompt = ai.definePrompt({
  name: 'moderateSensitiveDataPrompt',
  input: {schema: ModerateSensitiveDataInputSchema},
  output: {schema: ModerateSensitiveDataOutputSchema},
  prompt: `You are a text moderation expert specializing in identifying sensitive PII (e.g., social security numbers, addresses, criminal records) within text, adhering to region-specific regulations.

You will analyze the provided text and determine if it contains any sensitive PII according to the specified region.

Region: {{{region}}}

Text: {{{text}}}

Indicate the flagged terms and set hasSensitiveData to true if any sensitive information is found, otherwise set it to false.

Consider regulations for the specified region when moderating the text. If no region is specified, default to US regulations.

Output in JSON format.`,
});

const moderateSensitiveDataFlow = ai.defineFlow(
  {
    name: 'moderateSensitiveDataFlow',
    inputSchema: ModerateSensitiveDataInputSchema,
    outputSchema: ModerateSensitiveDataOutputSchema,
  },
  async input => {
    const {output} = await moderateSensitiveDataPrompt(input);
    return output!;
  }
);
