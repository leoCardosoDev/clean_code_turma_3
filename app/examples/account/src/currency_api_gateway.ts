import CurrencyApi from './currency_api'

export default class CurrencyAPIGateway implements CurrencyApi {
  convert(currency: string, amount: number): number {
    return 0;
  }
}
