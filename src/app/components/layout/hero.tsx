import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center text-white overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1519219322305-6804b46b6279?q=80&w=2070"
        alt="fsociety mask"
        fill
        className="object-cover"
        data-ai-hint="hacker mask"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
