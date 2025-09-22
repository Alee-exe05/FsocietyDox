import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center text-white overflow-hidden">
      <Image
        src="https://picsum.photos/seed/fsociety-hero/1200/400"
        alt="Fsociety hacker"
        fill
        className="object-cover object-top"
        data-ai-hint="hacker anonymous"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
