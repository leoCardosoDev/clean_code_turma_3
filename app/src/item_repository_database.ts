import DatabaseConnection from './database_connection'
import Item from './item'
import ItemRepository from './item_repository'

export default class ItemRepositoryDatabase implements ItemRepository {

  constructor (readonly databaseConnection: DatabaseConnection) {}

  async findById (idItem: number): Promise<Item> {
    const [itemData] = await this.databaseConnection.query('select * from cccat3.item where id = $1', [idItem])
    return new Item(itemData.id, itemData.category, itemData.description, parseFloat(itemData.price))
  }

}
