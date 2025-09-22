import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center text-white overflow-hidden">
      <Image
        src="https://picsum.photos/seed/misty-road/1200/400"
        alt="Misty road winding through hills"
        fill
        className="object-cover object-center"
        data-ai-hint="misty road"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
