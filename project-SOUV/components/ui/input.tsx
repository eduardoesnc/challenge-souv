import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from './label';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className='group flex w-full flex-col focus-within:text-purpleLight'>
        <Label
          htmlFor='input-id'
          className='mb-2 font-inter text-[12px] font-normal text-customGray-200 transition-colors duration-300 group-focus-within:text-purpleLight'
        >
          {label}
        </Label>
        <input
          id='input-id'
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-customGray-300 bg-customGray-500 px-3 py-2 text-sm text-customGray-100 ring-offset-purpleLight placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
