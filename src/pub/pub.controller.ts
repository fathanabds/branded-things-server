import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PubService } from './pub.service';
import { ProductService } from 'src/product/product.service';

@Controller('pub')
export class PubController {
  constructor(
    private readonly pubService: PubService,
    private readonly productService: ProductService,
  ) {}

  @Get('products')
  findAll(
    @Query('search') search: string,
    @Query('order') order: 'ASC' | 'DESC',
    @Query('page') page: string,
    @Query('category') category: string,
  ) {
    return this.pubService.findAllProducts(search, order, +page, +category);
  }

  @Get('products/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }
}
