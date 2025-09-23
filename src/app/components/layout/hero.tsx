export function Hero() {
  return (
    <div className="relative h-[200px] w-full flex items-center justify-center text-white overflow-hidden bg-card">
      <div className="z-20 flex items-center gap-4 text-primary-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
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
        <span className="font-headline text-5xl font-bold animate-glitter">FSociety Dox</span>
      </div>
    </div>
  );
}
