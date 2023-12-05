import Item from './item'

export default interface ItemRepository {
  findById(idItem: number): Item
}
