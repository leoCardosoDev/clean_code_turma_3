const example1 = require('./exemple1')

describe('Calculate Ride', () => {
  test('Deve calcular uma corrida de taxi', function () {
    const distance = 1000
    const date = new Date('2021-07-01T10:00:00')
    const price = example1.calculateRide(distance, date)
    expect(price).toBe(2100)
  })
  
  test('Deve calcular uma corrida de taxi a noite', function () {
    const price = example1.calculateRide(1000, new Date('2021-07-01T23:00:00'))
    expect(price).toBe(3900)
  })
  
  test('Deve calcular uma corrida de taxi no Domingo', function () {
    const price = example1.calculateRide(1000, new Date('2021-07-11T10:00:00'))
    expect(price).toBe(2900)
  })
})
