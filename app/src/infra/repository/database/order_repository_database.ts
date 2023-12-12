import Order from '../../../domain/entity/order'
import OrderRepository from '../../../domain/repository/order_repository'
import DatabaseConnection from '../../database/database_connection'

export default class OrderRepositoryDatabase implements OrderRepository {
  constructor (readonly databaseConnection: DatabaseConnection) {}

  async save(order: Order): Promise<void> {
    const [orderData] = await this.databaseConnection.query(`
    insert into cccat3.order 
    (code, cpf, issue_date, freight, sequence, coupon) 
    values ($1, $2, $3, $4, $5, $6) returning *`, 
    [order.getCode(), order.getCpf(), order.issueDate, order.getFreight(), order.sequence, order.getCoupon()])
    for (const orderItem of order.getOrderItems()) {
      await this.databaseConnection.query(`
      insert into cccat3.order_item
      (id_order, id_item, price, quantity)
      values ($1, $2, $3, $4)
      `, [
        orderData.id,
        orderItem.idItem,
        orderItem.price,
        orderItem.quantity
      ])
    }
  }
}
