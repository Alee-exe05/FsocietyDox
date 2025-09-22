export function Hero() {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center text-white overflow-hidden bg-card">
      <div className="z-20 flex items-center gap-8 text-primary-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="2" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="6" y1="12" x2="2" y2="12" />
          <line x1="22" y1="12" x2="18" y2="12" />
        </svg>
        <span className="font-headline text-7xl font-bold">FSociety Dox</span>
      </div>
    </div>
  );
}
