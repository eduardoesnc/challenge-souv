import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShoppingItem } from './ShoppingItem.entity';


@Injectable()
export class ShoppingItemService {
  constructor(
    @InjectRepository(ShoppingItem)
    private shopingItemRepository: Repository<ShoppingItem>,
  ) {}

  create(shopingItem: Partial<ShoppingItem>): Promise<ShoppingItem> {
    const novaShoppingItem = this.shopingItemRepository.create(shopingItem);
    return this.shopingItemRepository.save(novaShoppingItem);
  }

  findAll(): Promise<ShoppingItem[]> {
    return this.shopingItemRepository.find({
      order: {
        completed: 'ASC', 
        createdAt: 'DESC',
      },
    });
  }

  findOne(id: number): Promise<ShoppingItem | null> {
    return this.shopingItemRepository.findOneBy({ id });
  }

  async update(id: number, updateData: Partial<ShoppingItem>): Promise<ShoppingItem | null> {
    await this.shopingItemRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.shopingItemRepository.delete(id);
  }
}