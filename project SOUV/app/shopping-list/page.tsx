'use client';
import Form from './components/Form';
import ItemsBox from './components/ItemBox';
import Loading from '@/components/Loading';
import { useShoppingItemsServiceGetItemsQuery } from '@/queries/shoppingItem.query';
import ErrorComponent from '@/components/Error';
import { useEffect, useState } from 'react';

export default function ShoppingListPage() {
  const { data, isLoading, isError, refetch } = useShoppingItemsServiceGetItemsQuery();

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  const backgroundStyles = {
    backgroundImage: "url('/images/background.jpg')",
    backgroundSize: windowWidth > 1366 ? '100% 186px' : 'auto 186px',
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      className='min-h-screen bg-customGray-600 px-[5%] py-20 transition-opacity duration-500 md:px-[20%]'
      style={backgroundStyles}
    >
      <div className='flex flex-col justify-center'>
        <header className='w-full'>
          <h1 className='mb-8 text-left font-inter text-2xl font-bold text-customGray-100'>
            Lista de Compras
          </h1>
        </header>
        <main>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <ErrorComponent refetch={refetch}/>
        ) : (
          <>
            <Form refetch={refetch}/>
            <ItemsBox items={data} refetch={refetch} />
          </>
        )}
        </main>
      </div>
    </div>
  );
}
