import { IsDefined, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsDefined({ message: 'Name is required' })
  name: string;
}
