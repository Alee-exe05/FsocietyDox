
"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { Sidebar, SidebarContent, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/components/layout/app-sidebar";
import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function SupportPage() {
    const { dictionary } = useLanguage();
    const { support } = dictionary;
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);
    
    if (loading || !user) {
        return <div>Loading...</div>;
    }

    return (
        <SidebarProvider>
            <Sidebar>
                <AppSidebar />
            </Sidebar>
            <SidebarInset>
                <main className="flex-1 p-4 md:p-10 flex justify-center">
                    <div className="absolute top-4 left-4">
                        <SidebarTrigger />
                    </div>
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
            </SidebarInset>
        </SidebarProvider>
    )
}
