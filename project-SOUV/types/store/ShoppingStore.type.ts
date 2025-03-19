import { Category } from '../Category.type';
import { ShoppingItem } from '../ShoppingItem.type';
import { Unit } from '../Unit.type';

export interface ShoppingStore {
  items: ShoppingItem[];
  formData: {
    name: string;
    quantity: number;
    unit: Unit;
    category: Category;
    completed: boolean;
  };
  isEditing: boolean;
  editingId: string | null;
  setFormData: (data: Partial<ShoppingStore['formData']>) => void;
  setIsEditing: (isEditing: boolean) => void;
  setEditingId: (id: string | null) => void;
  resetFormData: () => void;
}
