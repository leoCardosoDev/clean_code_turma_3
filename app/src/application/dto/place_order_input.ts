export default class PlaceOrderInput {
  constructor(readonly cpf: string, readonly orderItems: any[], readonly coupon?: string) {}
}
