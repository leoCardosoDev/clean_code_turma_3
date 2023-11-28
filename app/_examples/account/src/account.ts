import CurrencyApi from './currency_api'

export default class Account {
  private balance: number
  currencyApi: CurrencyApi

  constructor(readonly code: string, currencyApi: CurrencyApi) {
    this.balance = 0
    this.currencyApi = currencyApi
  }

  credit(amount: number, currency?: string) {
    if (currency) {
      amount = this.currencyApi.convert(currency, amount)
    }
    this.balance += amount
  }

  debit(amount: number, currency?: string) {
    if (currency) {
      amount = this.currencyApi.convert(currency, amount)
    }
    this.balance -= amount
  }

  getBalance(){
    return this.balance
  }
}
