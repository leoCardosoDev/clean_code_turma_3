export default class Item {
  constructor(
    readonly idItem: number,
    readonly category: string,
    readonly description: string,
    readonly price: number = 0,
    readonly width: number = 0,
    readonly height: number = 0,
    readonly length: number = 0,
    readonly weigth: number = 0
  ) {}

  getVolume() {
    return this.width / 100 * this.height / 100 * this.length / 100
  }

  getDensity() {
    return this.weigth / this.getVolume()
  }

  getFreight() {
    const freight = 1000 * this.getVolume() * (this.getDensity() / 100)
    return (freight < 10) ? 10 : freight
  }
}
