import Order from '../src/order'

test('Não deve criar um pedido com CPF inválido', () => {
  expect(() =>  new Order('111.111.111-11')).toThrow(new Error('Invalid cpf'))
})
