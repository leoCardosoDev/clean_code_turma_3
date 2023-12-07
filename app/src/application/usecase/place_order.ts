import ItemRepository from '../../domain/repository/item_repository'
import Order from '../../domain/entity/order'
import OrderRepository from '../../domain/repository/order_repository'
import PlaceOrderInput from '../dto/place_order_input'
import PlaceOrderOutput from '../dto/place_order_output'
import PlaceOrderOutputAssembler from '../dto/place_order_output-assembler'

export default class PlaceOrder {
  constructor (readonly itemRepository: ItemRepository, readonly orderRepository: OrderRepository) {}

  async execute (input: PlaceOrderInput): Promise<PlaceOrderOutput> {
    const order = new Order(input.cpf)
    for (const orderItem of input.orderItems) {
      const item = await this.itemRepository.findById(orderItem.idItem)
      order.addItem(item, orderItem.quantity)
    }
    this.orderRepository.save(order)
    return PlaceOrderOutputAssembler.assembly(order)
  } 
}
