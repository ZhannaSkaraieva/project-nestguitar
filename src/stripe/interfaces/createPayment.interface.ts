export interface ICreatePayment {
  userId: number;
  orderId: number;
  currency: string;
  amount: number;
}
