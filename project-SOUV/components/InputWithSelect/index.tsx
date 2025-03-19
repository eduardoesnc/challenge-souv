import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '../ui/label';
import { units } from '@/lib/constants';
import { Unit } from '@/types/Unit.type';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface InputWithSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  values: Unit[];
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSelectChange?: (value: string) => void;
  selectValue?: string;
}

const InputWithSelect = React.forwardRef<HTMLInputElement, InputWithSelectProps>(
  (
    { className, type, label, values, onInputChange, onSelectChange, selectValue, ...props },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div className={cn('flex w-full items-center', className)}>
        <div className='flex-1'>
          <div className='group flex w-full flex-col'>
            <Label
              htmlFor='input-with-select'
              className={`mb-2 font-inter text-[12px] font-normal transition-colors duration-300 group-focus-within:text-purpleLight ${isOpen ? 'text-purpleLight' : 'text-customGray-200'}`}
            >
              {label}
            </Label>
            <div className='flex'>
              <input
                id='input-with-select'
                type={type}
                className={cn(
                  'flex h-10 w-[50%] rounded-l-md rounded-r-none border border-customGray-300 bg-customGray-500 px-3 py-2 text-sm text-customGray-100 ring-offset-purpleLight placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                )}
                ref={ref}
                onChange={onInputChange}
                {...props}
              />
              <Select
                defaultValue={units[0].short}
                value={selectValue}
                onValueChange={onSelectChange}
                onOpenChange={setIsOpen}
              >
                <SelectTrigger
                  className={`relative h-10 w-[50%] rounded-l-none rounded-r-md border border-customGray-300 bg-customGray-400 px-3 py-2 text-sm text-customGray-100 ring-offset-purpleLight ${
                    isOpen ? 'ring-2 ring-ring ring-offset-1' : 'focus:ring-2 focus:ring-offset-1'
                  } [&>svg:not(.custom-icon)]:hidden`}
                >
                  <SelectValue placeholder='Selecione uma opção' />
                  <span className='custom-icon absolute right-3 top-1/2 -translate-y-1/2'>
                    {isOpen ? (
                      <ChevronUp className='h-4 w-4 text-purpleLight' />
                    ) : (
                      <ChevronDown className='h-4 w-4 text-customGray-100' />
                    )}
                  </span>
                </SelectTrigger>
                <SelectContent className='border-customGray-300 bg-customGray-400 p-0 text-customGray-100'>
                  {values.map(unit => (
                    <SelectItem
                      key={unit.full}
                      value={unit.short}
                      className='rounded-none border-b border-customGray-300 transition-colors duration-200 focus:bg-customGray-300 focus:text-customGray-100 data-[state=checked]:bg-customGray-300 data-[state=checked]:text-customGray-100'
                    >
                      {unit.short.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

InputWithSelect.displayName = 'InputWithSelect';

export { InputWithSelect };
