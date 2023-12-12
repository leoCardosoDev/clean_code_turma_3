import ItemRepository from '../../domain/repository/item_repository'
import Order from '../../domain/entity/order'
import OrderRepository from '../../domain/repository/order_repository'
import PlaceOrderInput from '../dto/place_order_input'
import PlaceOrderOutput from '../dto/place_order_output'
import PlaceOrderOutputAssembler from '../dto/place_order_output_assembler'
import CouponRepository from '../../domain/repository/coupon_repository'

export default class PlaceOrder {
  constructor (readonly itemRepository: ItemRepository, readonly orderRepository: OrderRepository, readonly couponRepository: CouponRepository) {}

  async execute (input: PlaceOrderInput): Promise<PlaceOrderOutput> {
    const order = new Order(input.cpf, input.issueDate, 1)
    for (const orderItem of input.orderItems) {
      const item = await this.itemRepository.findById(orderItem.idItem)
      order.addItem(item, orderItem.quantity)
    }
    if (input.coupon) {
      const coupon = await this.couponRepository.findByCode(input.coupon)
      order.addCoupon(coupon)
    }
    this.orderRepository.save(order)
    return PlaceOrderOutputAssembler.assembly(order)
  } 
}
