import Coupon from './coupon'
import Cpf from "./cpf"
import Item from './item'
import OrderCode from './order_code'
import OrderItem from './order_item'

export default class Order {
  private cpf: Cpf
  private coupon: Coupon | undefined
  private orderItems: OrderItem[]
  private freight: number
  code: OrderCode

  constructor(cpf: string, readonly issueDate: Date = new Date(), readonly sequence: number = 1) {
    this.cpf = new Cpf(cpf)
    this.orderItems = []
    this.freight = 0
    this.code = new OrderCode(issueDate, sequence)
  }

  addItem(item: Item, quantity: number) {
    this.freight += item.getFreight() * quantity
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

  getFreight () {
    return this.freight
  }
}
