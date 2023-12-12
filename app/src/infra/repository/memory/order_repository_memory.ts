import Order from '../../../domain/entity/order'
import OrderRepository from '../../../domain/repository/order_repository'

export default class OrderRepositoryMermory implements OrderRepository {
  orders: Order[]

  constructor() {
    this.orders = []
  }

  async save(order: Order): Promise<void> {
    this.orders.push(order)
  }
}
