import { Category } from '@/types/Category.type';
import { Unit } from '@/types/Unit.type';
import { Milk, Beef, Apple, Carrot, Sandwich } from 'lucide-react';

export const units: Unit[] = [
  { short: 'Un.', full: 'unidade' },
  { short: 'L', full: 'litro' },
  { short: 'Kg', full: 'quilograma' },
];

export const categories: Category[] = [
  {
    value: 'Selecione',
    label: 'Selecione',
    icon: Sandwich,
    color: '#FFFFF',
    colorDark: '#FFFFF',
  },
  {
    value: 'padaria',
    label: 'Padaria',
    icon: Sandwich,
    color: '#BB9F3A', // Cor amarela
    colorDark: '#211E12', // Cor amarela escura
  },
  {
    value: 'legume',
    label: 'Legume',
    icon: Carrot,
    color: '#8CAD51', // Cor verde
    colorDark: '#1C2015', // Cor verde escura
  },
  {
    value: 'carne',
    label: 'Carne',
    icon: Beef,
    color: '#DB5BBF', // Cor pink
    colorDark: '#251622', // Cor pink escura
  },
  {
    value: 'fruta',
    label: 'Fruta',
    icon: Apple,
    color: '#E07B67', // Cor laranja
    colorDark: '#261A17', // Cor laranja escura
  },
  {
    value: 'bebida',
    label: 'Bebida',
    icon: Milk,
    color: '#7B94CB', // Cor azul
    colorDark: '#1A1D23', // Cor azul escura
  },
];

export const getCategoryIcon = (categoryValue: string) => {
  switch (categoryValue) {
    case 'padaria':
      return Sandwich;
    case 'legume':
      return Carrot;
    case 'carne':
      return Beef;
    case 'fruta':
      return Apple;
    case 'bebida':
      return Milk;
    default:
      return null;
  }
};
