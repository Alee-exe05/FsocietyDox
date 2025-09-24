
"use client";
import { AppHeader } from "@/app/components/layout/app-header";
import { AddPasteForm } from "@/app/components/add-paste-form";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent } from "@/components/ui/card";

const FsocietyAsciiArt = () => (
    <pre className="text-xs text-primary font-mono whitespace-pre-wrap break-words">
{`
    _/_/_/    _/_/_/_/  _/_/_/_/_/    _/_/_/_/  _/_/_/_/  _/_/_/_/_/  _/_/_/_/
   _/    _/  _/            _/      _/        _/    _/      _/          _/
  _/_/_/    _/_/_/        _/      _/_/_/    _/_/_/        _/          _/
 _/    _/  _/            _/      _/        _/    _/      _/          _/
_/    _/  _/_/_/_/      _/      _/        _/    _/      _/      _/_/_/_/

    _/_/_/    _/      _/    _/_/_/_/_/  _/_/_/_/_/    _/_/_/    _/_/_/
     _/      _/_/    _/        _/          _/      _/    _/    _/
    _/      _/  _/  _/        _/          _/      _/_/_/_/    _/
   _/      _/    _/_/        _/          _/      _/    _/    _/
_/_/_/    _/      _/        _/          _/      _/    _/  _/_/_/
`}
    </pre>
);


export default function AddPastePage() {
    const { dictionary } = useLanguage();
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 p-4 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <AddPasteForm />
                    </div>
                    <div className="hidden lg:block">
                        <Card>
                           <CardContent className="p-4">
                             <FsocietyAsciiArt />
                           </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
