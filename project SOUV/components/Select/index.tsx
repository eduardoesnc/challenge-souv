import * as React from 'react';
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Label } from '../ui/label';
import { Category } from '@/types/Category.type';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  values: Category[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, values, selectedValue, onValueChange }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const selectedCategory = values.find(value => value.value === selectedValue);

    return (
      <div className={cn('group flex w-full flex-col focus-within:text-purpleLight', className)}>
        <Label
          className={`mb-2 font-inter text-[12px] font-normal transition-colors duration-300 group-focus-within:text-purpleLight ${isOpen ? 'text-purpleLight' : 'text-customGray-200'}`}
        >
          {label}
        </Label>
        <ShadcnSelect value={selectedValue} onValueChange={onValueChange} onOpenChange={setIsOpen}>
          <SelectTrigger
            className={`relative h-10 border border-customGray-300 bg-customGray-400 px-3 py-2 text-sm text-customGray-100 ring-offset-purpleLight ${
              isOpen ? 'ring-2 ring-ring ring-offset-1' : 'focus:ring-2 focus:ring-offset-1'
            } [&>svg:not(.custom-icon)]:hidden`}
          >
            <SelectValue placeholder='Selecione'>
              {selectedCategory ? selectedCategory.label : 'Selecione'}
            </SelectValue>
            <span className='custom-icon absolute right-3 top-1/2 -translate-y-1/2'>
              {isOpen ? (
                <ChevronUp className='h-4 w-4 text-purpleLight' />
              ) : (
                <ChevronDown className='h-4 w-4 text-customGray-100' />
              )}
            </span>
          </SelectTrigger>
          <SelectContent className='border-customGray-300 bg-customGray-400 p-0 text-customGray-100'>
            {values
              .filter(value => value.value !== 'Selecione')
              .map(value => (
                <SelectItem
                  key={value.value}
                  value={value.value}
                  className='rounded-none border-b border-customGray-300 transition-colors duration-200 focus:bg-customGray-300 focus:text-customGray-100 data-[state=checked]:bg-customGray-300 data-[state=checked]:text-customGray-100'
                >
                  <div className='flex items-center gap-2'>
                    <value.icon className='h-5 w-5' color={value.color} />
                    <span>{value.label}</span>
                  </div>
                </SelectItem>
              ))}
          </SelectContent>
        </ShadcnSelect>
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select };
