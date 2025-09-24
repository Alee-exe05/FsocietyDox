"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldCheck, ShieldAlert, LoaderCircle, Info } from 'lucide-react';
import { moderateSensitiveData, ModerateSensitiveDataOutput } from '@/ai/flows/moderate-sensitive-data';
import { useLanguage } from '@/contexts/language-context';
import { useToast } from '@/hooks/use-toast';
import { usePaste } from '@/contexts/paste-context';

export function ModerationTool() {
  const { dictionary } = useLanguage();
  const { toast } = useToast();
  const { incrementModerated, incrementFlagged } = usePaste();
  const [text, setText] = useState('');
  const [region, setRegion] = useState('US');
  const [result, setResult] = useState<ModerateSensitiveDataOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleModerate = async () => {
    if (!text.trim()) {
      toast({
        title: dictionary.moderation.error.title,
        description: dictionary.moderation.error.emptyText,
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setResult(null);
    try {
      const moderationResult = await moderateSensitiveData({ text, region });
      setResult(moderationResult);
      incrementModerated();
      if (moderationResult.hasSensitiveData) {
        incrementFlagged();
      }
    } catch (error) {
      console.error("Moderation failed:", error);
      toast({
        title: dictionary.moderation.error.title,
        description: dictionary.moderation.error.apiError,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">{dictionary.moderation.title}</CardTitle>
        <CardDescription>{dictionary.moderation.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Textarea
            placeholder={dictionary.moderation.placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[120px]"
            disabled={isLoading}
          />
          <div className="flex justify-between gap-2">
            <Select value={region} onValueChange={setRegion} disabled={isLoading}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="US">USA</SelectItem>
                <SelectItem value="EU">EU</SelectItem>
                <SelectItem value="UK">UK</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleModerate} disabled={isLoading}>
              {isLoading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
              {dictionary.moderation.button}
            </Button>
          </div>
        </div>
        {result && (
          <Alert variant={result.hasSensitiveData ? 'destructive' : 'default'}>
            {result.hasSensitiveData ? (
              <ShieldAlert className="h-4 w-4" />
            ) : (
              <ShieldCheck className="h-4 w-4" />
            )}
            <AlertTitle>
              {result.hasSensitiveData ? dictionary.moderation.result.sensitive.title : dictionary.moderation.result.safe.title}
            </AlertTitle>
            <AlertDescription>
              {result.hasSensitiveData ? (
                <>
                  {dictionary.moderation.result.sensitive.description}
                  <ul className="mt-2 list-disc list-inside">
                    {result.flaggedTerms.map((term, index) => (
                      <li key={index} className="font-mono">{term}</li>
                    ))}
                  </ul>
                </>
              ) : (
                dictionary.moderation.result.safe.description
              )}
            </AlertDescription>
          </Alert>
        )}
        {!result && !isLoading && (
            <Alert variant="default" className="border-primary/50">
                <Info className="h-4 w-4 text-primary" />
                <AlertTitle>{dictionary.moderation.info.title}</AlertTitle>
                <AlertDescription>{dictionary.moderation.info.description}</AlertDescription>
            </Alert>
        )}
      </CardContent>
    </Card>
  );
}
