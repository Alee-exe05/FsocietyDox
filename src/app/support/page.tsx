
"use client";
import { AppHeader } from "@/app/components/layout/app-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/language-context";

export default function SupportPage() {
    const { dictionary } = useLanguage();
    const { support } = dictionary;
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 p-4 md:p-10 flex justify-center">
                <div className="w-full max-w-4xl space-y-8">
                    <Card className="border-2 border-foreground/50 animate-border-glitter">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">{support.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                {support.description}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-foreground/50 animate-border-glitter">
                        <CardHeader>
                            <CardTitle className="font-headline">{support.terms_title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {support.terms.map((term, index) => (
                                    <AccordionItem value={`item-${index}`} key={index} className="border-b-2 border-foreground/30">
                                        <AccordionTrigger className="font-semibold">{term.title}</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {term.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-foreground/50 animate-border-glitter">
                        <CardHeader>
                            <CardTitle className="font-headline">{support.privacy_title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {support.privacy.map((policy, index) => (
                                    <AccordionItem value={`item-${index}`} key={index} className="border-b-2 border-foreground/30">
                                        <AccordionTrigger className="font-semibold">{policy.title}</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {policy.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
