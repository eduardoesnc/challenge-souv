import { LucideProps } from 'lucide-react';

export interface Category {
  value: string;
  label: string;
  icon: React.ComponentType<LucideProps>;
  color: string;
  colorDark: string;
}
