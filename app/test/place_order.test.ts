import ItemRepositoryMemory from '../src/item_repository_memory'
import OrderRepositoryMermory from '../src/order_repository_memory'
import PlaceOrder from '../src/place_order'

test('Deve fazer um pedido', async () => {
  const input = {
    cpf: '847.903.332-05',
    orderItems: [
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
    ]
  }
  const placeOrder = new PlaceOrder(new ItemRepositoryMemory(), new OrderRepositoryMermory())
  const output = await placeOrder.execute(input)
  expect(output.total).toBe(6090)
})
