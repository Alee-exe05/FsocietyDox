
"use client";

import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function Hero() {
  const { dictionary } = useLanguage();
  return (
    <div className="p-4 md:px-10">
      <Card className="relative h-[120px] md:h-[100px] w-full flex items-center justify-center text-white overflow-hidden bg-card/50 border-muted-foreground/30">
        <div className="z-20 flex flex-col items-center gap-2 text-center text-primary-foreground">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]"
              >
                <path d="M4 17l6-6-6-6"/>
                <line x1="12" y1="19" x2="20" y2="19"/>
              </svg>
              <span className="font-headline text-2xl font-bold">FSociety Dox</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-md">
                {dictionary.hero.description}
            </p>
        </div>
      </Card>
    </div>
  );
}
