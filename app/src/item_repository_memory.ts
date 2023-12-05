import Item from './item'
import ItemRepository from './item_repository'

export default class ItemRepositoryMemory implements ItemRepository {
  items: Item[]
  constructor() {
    this.items = [
      new Item(1, "Instrumentos Musicais", "Guitarra", 1000),
      new Item(2, "Instrumentos Musicais", "Amplificador", 5000),
      new Item(3, "Instrumentos Musicais", "Cabo", 30)
    ]
  }
  findById(idItem: number): Item {
    const item = this.items.find(item => item.idItem === idItem)
    if (!item) throw new Error('Item not found')
    return item
  }
}
