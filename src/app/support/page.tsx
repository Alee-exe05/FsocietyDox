import { AppHeader } from "@/app/components/layout/app-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const terms = [
    {
        title: "1. Acceptance of Terms",
        content: "By accessing and using FSociety Dox, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
        title: "2. Use License",
        content: "Permission is granted to temporarily access FSociety Dox for personal, non-commercial transitory viewing only."
    },
    {
        title: "3. Disclaimer",
        content: "The materials on FSociety Dox are provided on an 'as is' basis. FSociety Dox makes no warranties, expressed or implied."
    },
    {
        title: "4. Limitations",
        content: "In no event shall FSociety Dox be liable for any damages arising out of the use or inability to use the materials."
    },
    {
        title: "5. Accuracy of materials",
        content: "The materials appearing on FSociety Dox could include technical, typographical, or photographic errors."
    }
];

const privacy = [
    {
        title: "Information We Collect",
        content: "We may collect personal information that you voluntarily provide to us when you register on the FSociety Dox, express an interest in obtaining information about us or our products and services, when you participate in activities on the FSociety Dox or otherwise when you contact us."
    },
    {
        title: "How We Use Your Information",
        content: "We use personal information collected via our FSociety Dox for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations."
    },
    {
        title: "Will Your Information Be Shared?",
        content: "We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations."
    }
];


export default function SupportPage() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 p-4 md:p-10 flex justify-center">
                <div className="w-full max-w-4xl space-y-8">
                    <Card className="border-2 border-primary/50">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">Support</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Welcome to the support page. Here you can find our Terms of Service and Privacy Policy.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-primary/50">
                        <CardHeader>
                            <CardTitle className="font-headline">Terms of Service</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {terms.map((term, index) => (
                                    <AccordionItem value={`item-${index}`} key={index} className="border-b-2 border-primary/30">
                                        <AccordionTrigger className="font-semibold">{term.title}</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {term.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-primary/50">
                        <CardHeader>
                            <CardTitle className="font-headline">Privacy Policy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {privacy.map((policy, index) => (
                                    <AccordionItem value={`item-${index}`} key={index} className="border-b-2 border-primary/30">
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
