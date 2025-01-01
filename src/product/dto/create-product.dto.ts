import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsDefined({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Description is required' })
  @IsDefined({ message: 'Description is required' })
  description: string;

  @IsNotEmpty({ message: 'Price is required' })
  @IsDefined({ message: 'Price is required' })
  @Min(0, { message: 'Price must be greater than 0' })
  price: number;

  stock: number;
  imgUrl: string;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty({ message: 'User is required' })
  @IsDefined({ message: 'User is required' })
  user: number;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty({ message: 'Category is required' })
  @IsDefined({ message: 'Category is required' })
  category: number;
}
