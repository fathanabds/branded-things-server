import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';

interface ProductCondition {
  take: number;
  skip: number;
  order: { updatedAt: 'ASC' | 'DESC' };
  where: {
    categoryId?: number;
    name?: string;
  };
}

@Injectable()
export class PubService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAllProducts(
    search: string,
    order: 'ASC' | 'DESC',
    page: number = 1,
    category: number,
  ) {
    const condition: ProductCondition = {
      take: 10,
      skip: 0,
      order: { updatedAt: 'DESC' },
      where: {},
    };
    if (category) {
      condition.where.categoryId = category;
    }
    if (search) {
      condition.where.name = search;
    }
    if (order) {
      condition.order.updatedAt = order as 'ASC' | 'DESC';
    }
    if (page) {
      condition.order.updatedAt = order;
    }
    const [products, totalData] =
      await this.productRepository.findAndCount(condition);
    return { products, totalData, totalPage: Math.ceil(totalData / 10) };
  }
}
