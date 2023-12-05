import Order from './order'
import OrderRepository from './order_repository'

export default class OrderRepositoryMermory implements OrderRepository {
  orders: Order[]

  constructor() {
    this.orders = []
  }

  save(order: Order): void {
    this.orders.push(order)
  }
}
