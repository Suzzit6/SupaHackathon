import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export function Button({ variant = 'default', className, ...props }: ButtonProps) {
  const baseClass = 'px-4 py-2 text-sm rounded-md font-medium focus:outline-none';
  const variants = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
  };

  return (
    <button
      className={twMerge(clsx(baseClass, variants[variant], className))}
      {...props}
    />
  );
}