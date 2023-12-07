import DatabaseConnection from './database_connection'
import pgp from 'pg-promise'

export default class DatabaseConnectionAdapter implements DatabaseConnection {
  pgp: any
  constructor () {
    this.pgp = pgp()('postgres://postgres:123456@localhost:5432/app')
  }
  query(statement: string, params: any) {
    return this.pgp.query(statement, params)
  }
  async close() {
    await this.pgp.$pool.end()
  }
}
