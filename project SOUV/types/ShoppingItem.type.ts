import { Category } from './Category.type';
import { Unit } from './Unit.type';

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  unit: Unit;
  category: Category;
  completed: boolean;
  createdAt: string;
}

export interface ShoppingItemRequestProps {
  name: string;
  quantity: number;
  unit: Unit;
  category: Category;
  completed: boolean;
}
