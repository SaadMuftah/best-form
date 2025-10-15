
import React from 'react';

const DumbbellIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    className={className}
  >
    <path d="M14.4 14.4 9.6 9.6" />
    <path d="M18.657 5.343a2.828 2.828 0 1 1 4 4L14 18l-4 4-4-4 8.657-8.657Z" />
    <path d="m8 16-4 4" />
    <path d="m16 8 4-4" />
  </svg>
);

export default DumbbellIcon;
