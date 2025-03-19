import { categories, units } from '@/lib/constants';
import { ShoppingStore } from '@/types/store/ShoppingStore.type';
import { create } from 'zustand';

export const useShoppingStore = create<ShoppingStore>(set => ({
  items: [],
  formData: {
    name: '',
    quantity: 1,
    unit: units[0],
    category: categories[0],
    completed: false,
  },
  isEditing: false,
  editingId: null,
  setFormData: (data: Partial<ShoppingStore['formData']>) =>
    set((state: ShoppingStore) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    })),
  setIsEditing: (isEditing: boolean) => set({ isEditing }),
  setEditingId: (editingId: string | null) => set({ editingId }),
  resetFormData: () =>
    set((state: ShoppingStore) => ({
      formData: {
        name: '',
        quantity: 1,
        unit: units[0],
        category: categories[0],
        completed: false,
      },
    })),
}));
