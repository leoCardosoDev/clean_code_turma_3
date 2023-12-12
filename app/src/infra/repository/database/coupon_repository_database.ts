import DatabaseConnection from '../../database/database_connection'
import CouponRepository from '../../../domain/repository/coupon_repository'
import Coupon from '../../../domain/entity/coupon'

export default class CouponRepositoryDatabase implements CouponRepository {

  constructor (readonly databaseConnection: DatabaseConnection) {}
  async findByCode(code: string): Promise<Coupon> {
    const [couponData] = await this.databaseConnection.query('select * from cccat3.coupon where code = $1', [code])
    const coupon = new Coupon(couponData.code, couponData.percentage, couponData.expire_date)
    return coupon
  }
}
