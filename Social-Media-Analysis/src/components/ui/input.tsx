import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        className={`border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 ${className}`}
        {...props}
      />
    </div>
  );
}