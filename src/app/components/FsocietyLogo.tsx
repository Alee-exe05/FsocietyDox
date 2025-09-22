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
        <path d="M15.5 8.5c.3-1 .5-2.2.5-3.5A6 6 0 0 0 4 6c0 1.3.2 2.5.5 3.5" />
        <path d="M4 14.5c0 1.3.2 2.5.5 3.5A6 6 0 0 0 16 22c1.3 0 2.5-.2 3.5-.5" />
        <path d="M18 2c-1.3 0-2.5.2-3.5.5" />
        <path d="M16 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        <path d="m4.5 8.5 15 15" />
      </svg>
      <span>FSociety Dox</span>
    </div>
  );
}