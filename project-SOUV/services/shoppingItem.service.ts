import { ShoppingItem, ShoppingItemRequestProps } from '@/types/ShoppingItem.type';
import { api } from './api';

export const ShoppingItemService = {
  // Cria um novo item de lista de compras
  createShoppingItem: async (shoppingItemData: ShoppingItemRequestProps): Promise<ShoppingItem> => {
    try {
      const result = await api.post('/shopping', shoppingItemData);
      return result.data;
    } catch (error) {
      console.error('Erro ao criar o item: ', error);
      throw error;
    }
  },

  // Busca todos os itens da lista de compras
  getAllShoppingItems: async (): Promise<ShoppingItem[]> => {
    try {
      const result = await api.get('/shopping');
      return result.data;
    } catch (error) {
      console.error('Erro ao buscar os itens: ', error);
      throw error;
    }
  },

  // Atualiza um item de lista de compras
  updateShoppingItem: async (
    id: string,
    updateData: Partial<ShoppingItemRequestProps>
  ): Promise<ShoppingItem | null> => {
    try {
      const result = await api.put(`/shopping/${id}`, updateData);
      return result.data;
    } catch (error) {
      console.error('Erro ao atualizar o item: ', error);
      throw error;
    }
  },

  // Remove um item da lista de compras
  removeShoppingItem: async (id: string): Promise<void> => {
    try {
      await api.delete(`/shopping/${id}`);
    } catch (error) {
      console.error('Erro ao remover o item: ', error);
      throw error;
    }
  },
};
