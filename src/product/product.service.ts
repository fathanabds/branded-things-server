import { HttpException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    const products = this.productRepository.find({
      relations: ['user', 'category'],
    });
    return products;
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    console.log('🚀 ~ ProductService ~ updateProductDto:', updateProductDto);
    const existingProduct = await this.productRepository.findOneBy({ id });
    if (!existingProduct) {
      throw new HttpException('Product not found', 404);
    }
    const productData = this.productRepository.merge(
      existingProduct,
      updateProductDto,
    );
    return this.productRepository.save(productData);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.productRepository.delete(id);
  }
}
