import { ICreateOrder, IOrderItem } from './createOrder.interface';
export interface ICreateOrderInternal extends ICreateOrder {
  userId: number;
  orderItem: IOrderItem[];
  totalPrice: number;
  // status: string;
}
