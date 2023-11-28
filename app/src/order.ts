import Cpf from "./cpf"
import Item from './item'
import OrderItem from './order_item'

export default class Order {
  cpf: Cpf
  orderItems: OrderItem[]

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf)
    this.orderItems = []
  }

  addItem(item: Item, quantity: number) {
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
  }

  getTotal() {
    let total = 0
    for (const orderItem of this.orderItems) {
      total += orderItem.price * orderItem.quantity
    }
    return total
  }
}
