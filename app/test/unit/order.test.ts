import Coupon from '../../src/domain/entity/coupon'
import Item from '../../src/domain/entity/item'
import Order from "../../src/domain/entity/order"

test("Não deve criar um pedido com CPF inválido", () => {
  expect(() => new Order("111.111.111-11")).toThrow(new Error("Invalid cpf"))
})

test("Deve criar um pedido", () => {
  const order = new Order("847.903.332-05")
  expect(order).toBeDefined()
})

test("Deve criar um pedido com 3 itens", () => {
  const order = new Order("847.903.332-05")
  order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1)
  order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1)
  order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3)
  const total = order.getTotal()
  expect(total).toBe(6090)
})

test("Deve criar um pedido com 3 itens com cupom de desconto", () => {
  const order = new Order("847.903.332-05")
  order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1)
  order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1)
  order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3)
  order.addCoupon(new Coupon("VALE20", 20))
  const total = order.getTotal()
  expect(total).toBe(4872)
})

test("Deve criar um pedido com 3 itens com cupom de desconto expirado", () => {
  const order = new Order("847.903.332-05", new Date('2021-10-10'))
  order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1)
  order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1)
  order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3)
  order.addCoupon(new Coupon("VALE20", 20, new Date('2021-03-01')))
  const total = order.getTotal()
  expect(total).toBe(6090)
})

test("Deve criar um pedido com 3 itens", () => {
  const order = new Order("847.903.332-05")
  order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3), 1)
  order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000, 100, 50, 50, 20), 1)
  order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30, 10, 10, 10, 0.9), 3)
  const freight = order.getFreight()
  expect(freight).toBe(260)
})

test("Deve criar um pedido com o código gerado", () => {
  const order = new Order("847.903.332-05", new Date('2021-03-01'))
  order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3), 1)
  order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000, 100, 50, 50, 20), 1)
  order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30, 10, 10, 10, 0.9), 3)
  const code = order.code
  expect(code.value).toBe('202100000001')
})
