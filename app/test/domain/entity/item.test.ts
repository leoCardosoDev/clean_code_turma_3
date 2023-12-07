import Item from '../../../src/domain/entity/item'

test('Deve criar um item', () => {
  const item = new Item(1, "Instrumento Musicais", "Guitarra", 1000)
  expect(item.idItem).toBe(1)
})

test('Deve criar um item e calcular o volume', () => {
  const item = new Item(1, "Instrumento Musicais", "Guitarra", 1000, 100, 30, 10)
  const volume = item.getVolume()
  expect(volume).toBe(0.03)
})

test('Deve criar um item e calcular a densidade', () => {
  const item = new Item(1, "Instrumento Musicais", "Guitarra", 1000, 100, 30, 10, 3)
  const density = item.getDensity()
  expect(density).toBe(100)
})

test('Deve criar um item e calcular o frete', () => {
  const item = new Item(1, "Instrumento Musicais", "Guitarra", 1000, 100, 30, 10, 3)
  const freight = item.getFreight()
  expect(freight).toBe(30)
})

test('Deve criar um item e calcular o frete minimo', () => {
  const item = new Item(3, "Instrumento Musicais", "Cabo", 30, 10, 10, 10, 0.9)
  const freight = item.getFreight()
  expect(freight).toBe(10)
})
