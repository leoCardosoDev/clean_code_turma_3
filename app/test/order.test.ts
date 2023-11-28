import Item from '../src/item'
import Order from "../src/order"

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
  order.addItem(new Item(3, "Instrumentos Musicais", "Guitarra", 30), 3)
  const total = order.getTotal()
  expect(total).toBe(6090)
})
