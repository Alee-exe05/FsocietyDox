import Image from 'next/image';
import { FsocietyLogo } from '@/app/components/FsocietyLogo';

export function Hero() {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center text-white overflow-hidden">
      <Image
        src="https://picsum.photos/seed/hacker-background/1200/400"
        alt="Hacker background"
        fill
        className="object-cover"
        data-ai-hint="hacker background"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20">
        <FsocietyLogo />
      </div>
    </div>
  );
}
