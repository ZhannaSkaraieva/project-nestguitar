export interface ICreateOrder {
  //id: number;
  userId: number;
  totalPrice: number;
  status: string;
  orderItem: IOrderItem[];
  //   createdAt: Date;
  //   updatedAt: Date;
}
export interface IOrderItem {
  productId: number;
  quantity: number;
}
