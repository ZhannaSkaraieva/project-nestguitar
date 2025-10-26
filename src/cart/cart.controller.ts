import { UpdateQuantityDto } from './dto-cart/UpdateQuantityDto.dto';
import {
  Controller,
  Get,
  Req,
  UnauthorizedException,
  Delete,
  Post,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import { CartService } from './cart.service';
import type { Request } from 'express';
import { AddItemDto } from './dto-cart/AddItemDto.dto';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get() //привязывает текущие товары в корзине для аутентифицированного пользователя.
  async getCartByUserId(@Req() req: Request) {
    const userId = req.user?.['sub'];
    if (!userId) {
      throw new UnauthorizedException('USER_NOT_AUTHENTICATED');
    }
    return await this.cartService.getCartByUserId(userId);
  }

  @Post('items')
  addItemToCart(@Body() AddItemDto: AddItemDto, @Req() req: Request) {
    // Logic to add a product to the user's cart
  }

  @Patch('items/:productId')
  updateCartItemQuantity(
    @Param('productId') productId: number,
    @Body() UpdateQuantityDto: UpdateQuantityDto,
    @Req() req: Request,
  ) {
    // Logic to update the quantity of a specific product in the user's cart
  }

  @Delete('items/:productId')
  removeItemFromCart(
    @Param('productId') productId: number,
    @Req() req: Request,
  ) {
    // Logic to remove a product from the user's cart
  }

  @Delete()
  async clearCart(@Req() req: Request) {
    // Logic to clear all items from the user's cart
  }
}
