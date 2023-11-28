import CurrencyApi from './currency_api'

export default class CurrencyAPIFake implements CurrencyApi {
  convert(currency: string, amount: number): number {
    return amount * 3;
  }
}
