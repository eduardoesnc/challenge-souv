import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ShoppingItemService } from './ShoppingItem.service';
import { ShoppingItem } from './ShoppingItem.entity';
import { ShoppingItemDto } from './dto/ShoppingItem.dto';

@Controller('shopping')
export class ShoppingItemController {
  constructor(private readonly shoppingItemService: ShoppingItemService) {}

  @Post()
  create(@Body() shoppingItemData: ShoppingItemDto): Promise<ShoppingItem> {
    return this.shoppingItemService.create(shoppingItemData);
  }

  @Get()
  findAll(): Promise<ShoppingItem[]> {
    return this.shoppingItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ShoppingItem | null> {
    return this.shoppingItemService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<ShoppingItem>): Promise<ShoppingItem | null> {
    return this.shoppingItemService.update(Number(id), updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.shoppingItemService.remove(Number(id));
  }
}