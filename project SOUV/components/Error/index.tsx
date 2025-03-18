import React from 'react';

const ErrorComponent: React.FC<{ refetch: () => void }> = ({ refetch }) => {
    return (
        <div className="flex items-center justify-center bg-purpleDark text-customGray-100 p-6 rounded-md shadow-md">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-4">Oops! Algo deu errado.</h2>
              <p className="mb-4 text-center">
                Não conseguimos carregar os itens da sua lista de compras. <br></br> Você pode tentar novamente clicando no botão abaixo.
              </p>
              <button
                onClick={refetch}
                className="mt-2 bg-customGray-100 text-purpleDark px-4 py-2 rounded-md hover:bg-customGray-200 transition-colors"
              >
                Tentar Novamente
              </button>
            </div>
          </div>
    );
};

export default ErrorComponent;