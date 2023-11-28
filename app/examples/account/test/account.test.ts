import sinon from 'sinon'
import Account from '../src/account'
import CurrencyAPIFake from '../src/currency_api_gateway_fake'

test('Deve criar uma conta', () => {
  const account = new Account('123', new CurrencyAPIFake())
  const balance = account.getBalance()
  expect(balance).toBe(0)
})

test('Deve criar uma conta e fazer um crédito', () => {
  const account = new Account('123', new CurrencyAPIFake())
  account.credit(100)
  const balance = account.getBalance()
  expect(balance).toBe(100)
})

test('Deve criar uma conta e fazer um crédito e um débito', () => {
  const account = new Account('123', new CurrencyAPIFake())
  account.credit(100)
  account.debit(50)
  const balance = account.getBalance()
  expect(balance).toBe(50)
})

test('Deve criar uma conta e fazer um crédito com currency', () => {
  const account = new Account('123', new CurrencyAPIFake())
  account.credit(100, "USD")
  const balance = account.getBalance()
  expect(balance).toBe(300)
})

test('Deve testar um stub', () => {
  const account = new Account('123', new CurrencyAPIFake())
  sinon.stub(account, "getBalance").returns(100)
  const balance = account.getBalance()
  expect(balance).toBe(100)
})

test('Deve testar um spy', () => {
  const account = new Account('123', new CurrencyAPIFake())
  const spy = sinon.spy(account, "getBalance")
  account.getBalance()
  sinon.assert.calledOnce(spy)
})

test('Deve testar um mock', () => {
  const account = new Account('123', new CurrencyAPIFake())
  const mock = sinon.mock(account)
  mock.expects('credit').once().withArgs(100)
  account.credit(100)
  mock.verify()
})
