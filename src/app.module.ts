import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { Category } from './category/entities/category.entity';
import { Product } from './product/entities/product.entity';
import { PubModule } from './pub/pub.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [User, Category, Product],
      database: 'nest_branded_things',
      synchronize: true, // do not set it true in production application
      logging: true,
    }),
    UserModule,
    CategoryModule,
    ProductModule,
    PubModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
