export interface ICreateOrder {
  //id: number;
  userId: number;
  orderItem: IOrderItem[];
  //   createdAt: Date;
  //   updatedAt: Date;
}
export interface IOrderItem {
  productId: number;
  quantity: number;
}
