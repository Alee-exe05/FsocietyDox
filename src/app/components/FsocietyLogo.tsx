import React from 'react';

export function FsocietyLogo() {
  return (
    <div className="flex items-center gap-2 font-headline text-xl font-bold text-primary-foreground">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M4 17l6-6-6-6"/>
        <line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
      <span>FSociety Dox</span>
    </div>
  );
}
