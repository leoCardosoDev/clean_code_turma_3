import PlaceOrderInput from '../../src/application/dto/place_order_input'
import PlaceOrder from '../../src/application/usecase/place_order'
import DatabaseConnectionAdapter from '../../src/infra/database/database_connection_adapter'
import CouponRepositoryDatabase from '../../src/infra/repository/database/coupon_repository_database'
import ItemRepositoryDatabase from '../../src/infra/repository/database/item_repository_database'
import OrderRepositoryDatabase from '../../src/infra/repository/database/order_repository_database'

let placeOrder: PlaceOrder
let itemRepository: ItemRepositoryDatabase
let orderRepository: OrderRepositoryDatabase
let couponRepository: CouponRepositoryDatabase
let databaseConnection: DatabaseConnectionAdapter

beforeEach(() => {
  databaseConnection = new DatabaseConnectionAdapter()
  itemRepository = new ItemRepositoryDatabase(databaseConnection)
  orderRepository = new OrderRepositoryDatabase(databaseConnection)
  couponRepository = new CouponRepositoryDatabase(databaseConnection)
  placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository)
})

test('Deve fazer um pedido', async () => {
  const input = new PlaceOrderInput('847.903.332-05', [
      {
        idItem: 1,
        quantity: 1
      }, 
      {
        idItem: 2,
        quantity: 1
      }, 
      {
        idItem: 3,
        quantity: 3
      }, 
    ], new Date('2021-03-01'), 'VALE20')
  const output = await placeOrder.execute(input)
  expect(output.total).toBe(4872)
  expect(output.code).toBe('202100000001')
})
