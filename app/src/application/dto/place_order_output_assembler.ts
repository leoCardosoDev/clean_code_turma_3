import Order from '../../domain/entity/order'
import PlaceOrderOutput from './place_order_output'

export default class PlaceOrderOutputAssembler {
  static assembly (order: Order) {
    const total = order.getTotal()
    return new PlaceOrderOutput(order.code.value, total)
  }
}
