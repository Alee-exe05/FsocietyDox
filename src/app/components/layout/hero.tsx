import { FsocietyLogo } from '@/app/components/FsocietyLogo';

export function Hero() {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center text-white overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="z-20 text-primary scale-[3]">
        <FsocietyLogo />
      </div>
    </div>
  );
}
