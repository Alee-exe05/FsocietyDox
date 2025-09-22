import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center text-white overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1593481499343-8b5527da26e4?q=80&w=1200"
        alt="Fsociety hacker"
        fill
        className="object-cover object-top"
        data-ai-hint="hacker anonymous"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
