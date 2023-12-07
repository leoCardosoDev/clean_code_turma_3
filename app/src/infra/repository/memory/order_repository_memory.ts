import Order from '../../../domain/entity/order'
import OrderRepository from '../../../domain/repository/order_repository'

export default class OrderRepositoryMermory implements OrderRepository {
  orders: Order[]

  constructor() {
    this.orders = []
  }

  save(order: Order): void {
    this.orders.push(order)
  }
}
