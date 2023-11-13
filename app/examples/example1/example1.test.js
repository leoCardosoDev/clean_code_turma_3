const example1 = require('./exemple1')

test('Deve clacular uma corrida de taxi', function () {
  const price = example1.calc(1000, new Date('2021-01-01T10:00:00'))
  expect(price).toBe(2100)
})
