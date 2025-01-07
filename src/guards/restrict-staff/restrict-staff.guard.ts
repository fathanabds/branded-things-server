import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class RestrictStaffGuard implements CanActivate {
  constructor(private readonly productService: ProductService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { user, params } = context.switchToHttp().getRequest();
    if (user.role === 'staff') {
      const product = await this.productService.findOne(+params.id);
      if (!product) {
        throw new HttpException('Product not found', 404);
      }
      if (product.user !== user.id) {
        throw new HttpException(
          'You are not allowed to access this resource',
          403,
        );
      }
    }
    return true;
  }
}
