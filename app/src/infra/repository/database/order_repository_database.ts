import Order from '../../../domain/entity/order'
import OrderRepository from '../../../domain/repository/order_repository'
import DatabaseConnection from '../../database/database_connection'

export default class OrderRepositoryDatabase implements OrderRepository {
  constructor (readonly databaseConnection: DatabaseConnection) {}

  async save(order: Order): Promise<void> {
    await this.databaseConnection.query('SELECT * FROM cccat3.order', [])
  }
}
