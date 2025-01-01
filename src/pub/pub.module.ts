import { Module } from '@nestjs/common';
import { PubService } from './pub.service';
import { PubController } from './pub.controller';
import { ProductModule } from 'src/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';

@Module({
  imports: [ProductModule, TypeOrmModule.forFeature([Product])],
  controllers: [PubController],
  providers: [PubService],
})
export class PubModule {}
