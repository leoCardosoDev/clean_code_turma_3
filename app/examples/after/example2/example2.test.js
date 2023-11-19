const example2 = require('./exemple2')

test('Deve validar um CPF', () => {
  const isValid = example2.validate('935.411.347-80')
  expect(isValid).toBeTruthy()
})

test('Deve tentar validar um CPF inválido', () => {
  const isValid = example2.validate('123.456.789-99')
  expect(isValid).toBeFalsy()
})

test('Deve tentar validar um CPF com todos os digitos iguais', () => {
  const isValid = example2.validate('111.111.111-11')
  expect(isValid).toBeFalsy()
})

test('Deve tentar validar um CPF inválido muito grande', () => {
  const isValid = example2.validate('123.456.789-1000')
  expect(isValid).toBeFalsy()
})

test('Deve tentar validar um CPF inválido muito pequeno', () => {
  const isValid = example2.validate('123.456')
  expect(isValid).toBeFalsy()
})

test('Deve tentar validar um CPF inválido null', () => {
  const isValid = example2.validate(null)
  expect(isValid).toBeFalsy()
})

test('Deve tentar validar um CPF inválido undefined', () => {
  const isValid = example2.validate(undefined)
  expect(isValid).toBeFalsy()
})
