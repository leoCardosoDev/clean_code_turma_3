import DatabaseConnectionAdapter from '../../src/infra/database/database_connection_adapter'

describe('Database Connection Adapter', () => {
  let databaseConnection: DatabaseConnectionAdapter

  beforeAll(async () => {
    databaseConnection = new DatabaseConnectionAdapter()
  })

  afterAll(async () => {
    await databaseConnection.close()
  })


  it('Deve criar uma conexão com o banco de dados', async () => {
    const items = await databaseConnection.query('SELECT * FROM cccat3.item', [])
    expect(items).toHaveLength(3)
  })
})

