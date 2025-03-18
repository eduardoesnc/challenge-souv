import { IsString, IsNumber, IsNotEmpty, IsBoolean, IsObject } from 'class-validator';

class UnitDto {
  @IsString()
  short: string;

  @IsString()
  full: string;
}

class CategoryDto {
  @IsString()
  value: string;

  @IsString()
  label: string;

  @IsObject()
  icon: Record<string, any>;

  @IsString()
  color: string;

  @IsString()
  colorDark: string;
}

export class ShoppingItemDto {
    @IsNotEmpty()
    @IsString()
    name: string; 
  
    @IsNotEmpty()
    @IsNumber()
    quantity: number; 
  
    @IsNotEmpty()
    @IsObject()
    unit: UnitDto; 
  
    @IsNotEmpty()
    @IsObject()
    category: CategoryDto;
  
    @IsBoolean()
    completed: boolean;
  }