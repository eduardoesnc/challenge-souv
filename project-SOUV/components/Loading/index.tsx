import { LoaderCircle } from 'lucide-react';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center py-8'>
      <LoaderCircle className='h-12 w-12 animate-spin text-purpleLight' />
      <div className='flex items-end gap-2'>
        <p className='mt-4 animate-pulse text-xl font-semibold text-purpleLight'>
          Carregando lista de compras...
        </p>
      </div>
    </div>
  );
};

export default Loading;
