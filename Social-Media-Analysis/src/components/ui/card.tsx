import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={`rounded-lg shadow-md p-4 bg-white ${className}`}>{children}</div>
  );
}