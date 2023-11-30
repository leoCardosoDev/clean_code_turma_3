import Coupon from './coupon'
import Cpf from "./cpf"
import Item from './item'
import OrderItem from './order_item'

export default class Order {
  cpf: Cpf
  coupon: Coupon | undefined
  orderItems: OrderItem[]

  constructor(cpf: string, readonly issueDate: Date = new Date()) {
    this.cpf = new Cpf(cpf)
    this.orderItems = []
  }

  addItem(item: Item, quantity: number) {
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
  }
  
  addCoupon(coupon: Coupon) {
    if (coupon.isExpired(this.issueDate)) return
    this.coupon = coupon
  }

  getTotal() {
    let total = 0
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal()
    }
    if (this.coupon) {
      total -= (total * this.coupon.percentage) / 100
    }
    return total
  }
}
