import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class ShoppingItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  quantity: number;

  @Column({ type: 'json' })
  unit: {
    short: string;
    full: string;
  };

  @Column({ type: 'json' })
  category: {
    value: string;
    label: string;
    icon: Record<string, any>;
    color: string;
    colorDark: string;
  };

  @Column({ default: false })
  completed: boolean;

  @CreateDateColumn()
  createdAt: Date;
}