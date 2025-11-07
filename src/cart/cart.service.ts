// import {
//   Injectable,
//   NotFoundException,
//   InternalServerErrorException,
// } from '@nestjs/common';
// import { CartDataService } from './cart.data-service';
// import { Cart } from '../../node_modules/.prisma/client';

// @Injectable()
// export class CartService {
//   constructor(private readonly cartDataService: CartDataService) {}

//   async getCartByUserId(userId: number): Promise<Cart> {
//     try {
//       const cart = await this.cartDataService.getCartByUserId(userId);
//       if (!cart) {
//         throw new NotFoundException('CART_NOT_FOUND');
//       }
//       return cart;
//     } catch {
//       throw new InternalServerErrorException('ERROR_RETRIEVING_PRODUCTS');
//     }
//   }
// }
