import PlaceOrderInput from '../../src/application/dto/place_order_input'
import PlaceOrder from '../../src/application/usecase/place_order'
import DatabaseConnectionAdapter from '../../src/infra/database/database_connection_adapter'
import ItemRepositoryDatabase from '../../src/infra/repository/database/item_repository_database'
import OrderRepositoryMermory from '../../src/infra/repository/memory/order_repository_memory'

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
    ])
  const placeOrder = new PlaceOrder(new ItemRepositoryDatabase(new DatabaseConnectionAdapter()), new OrderRepositoryMermory())
  const output = await placeOrder.execute(input)
  expect(output.total).toBe(6090)
})
