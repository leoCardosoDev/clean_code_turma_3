import DatabaseConnection from '../../database/database_connection'
import Item from '../../../domain/entity/item'
import ItemRepository from '../../../domain/repository/item_repository'

export default class ItemRepositoryDatabase implements ItemRepository {

  constructor (readonly databaseConnection: DatabaseConnection) {}

  async findById (idItem: number): Promise<Item> {
    const [itemData] = await this.databaseConnection.query('select * from cccat3.item where id = $1', [idItem])
    return new Item(itemData.id, itemData.category, itemData.description, parseFloat(itemData.price), itemData.width, itemData.height, itemData.length, itemData.weigth)
  }
}
