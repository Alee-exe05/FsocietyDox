import React from 'react';

export function FsocietyLogo() {
  return (
    <div className="flex items-center gap-2 font-headline text-2xl font-bold text-primary-foreground">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="6" y1="12" x2="2" y2="12" />
        <line x1="22" y1="12" x2="18" y2="12" />
      </svg>
      <span>FSociety Dox</span>
    </div>
  );
}
