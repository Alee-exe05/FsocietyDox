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
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 9.8c0 7.3-8 11.8-8 11.8z" />
          <path d="m9.09 9 1.82 3.2-1.82 3.2M14.91 9l-1.82 3.2 1.82 3.2" />
        </svg>
        <span className="font-headline text-7xl font-bold">FSociety Dox</span>
      </div>
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
