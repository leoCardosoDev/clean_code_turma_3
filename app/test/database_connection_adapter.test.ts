import DatabaseConnectionAdapter from '../src/database_connection_adapter'

describe('Database Connection Adapter', () => {
  it('Deve criar uma conexão com o banco de dados', async () => {
    const databaseConnection = new DatabaseConnectionAdapter()
    const items = await databaseConnection.query('SELECT * FROM cccat3.item', [])
    console.log(items)
    expect(items).toHaveLength(3)
  })
})

