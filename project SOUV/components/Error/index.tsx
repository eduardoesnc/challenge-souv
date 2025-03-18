import React from 'react';

const ErrorComponent: React.FC<{ refetch: () => void }> = ({ refetch }) => {
  return (
    <div className='flex items-center justify-center rounded-md bg-purpleDark p-6 text-customGray-100 shadow-md'>
      <div className='flex flex-col items-center'>
        <h2 className='mb-4 text-xl font-semibold'>Oops! Algo deu errado.</h2>
        <p className='mb-4 text-center'>
          Não conseguimos carregar os itens da sua lista de compras. <br></br> Você pode tentar
          novamente clicando no botão abaixo.
        </p>
        <button
          onClick={refetch}
          className='mt-2 rounded-md bg-customGray-100 px-4 py-2 text-purpleDark transition-colors hover:bg-customGray-200'
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;
