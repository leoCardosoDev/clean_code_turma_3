export default interface CurrencyApi {
  convert(currency: string, amount: number): number
}
