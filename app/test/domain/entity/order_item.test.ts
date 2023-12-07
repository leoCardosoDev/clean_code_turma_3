import OrderItem from '../../../src/domain/entity/order_item'

test('Deve criar um item de pedido', () => {
  const orderItem = new OrderItem(1, 1000, 2)
  expect(orderItem.getTotal()).toBe(2000)
})
