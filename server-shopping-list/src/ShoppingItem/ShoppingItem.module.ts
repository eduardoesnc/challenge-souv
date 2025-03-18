import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingItem } from './ShoppingItem.entity';
import { ShoppingItemService } from './ShoppingItem.service';
import { ShoppingItemController } from './ShoppingItem.controller';


@Module({
  imports: [TypeOrmModule.forFeature([ShoppingItem])],
  providers: [ShoppingItemService],
  controllers: [ShoppingItemController],
})
export class ShoppingItemModule {}