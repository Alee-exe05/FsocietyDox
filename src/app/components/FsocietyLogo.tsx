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
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 9.8c0 7.3-8 11.8-8 11.8z" />
        <path d="m9.09 9 1.82 3.2-1.82 3.2M14.91 9l-1.82 3.2 1.82 3.2" />
      </svg>
      <span>FSociety Dox</span>
    </div>
  );
}
