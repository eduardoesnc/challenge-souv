'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-customGray-400 group-[.toaster]:text-customGray-100 group-[.toaster]:border-customGray-300 group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-customGray-100 group-[.toast]:text-custromGray-400',
          cancelButton: 'group-[.toast]:bg-customGray-100 group-[.toast]:text-custromGray-400',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
