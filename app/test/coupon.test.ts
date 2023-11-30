import Coupon from '../src/coupon'

describe('Teste do coupon', () => {
  it('Deve criar um cupom de desconto válido', () => {
    const coupon = new Coupon("VALE20", 20, new Date('2021-10-10'))
    const isExpired = coupon.isExpired(new Date('2021-09-10'))
    expect(isExpired).toBeFalsy()
  })

  it('Deve criar um cupom de desconto inválido', () => {
    const coupon = new Coupon("VALE20", 20, new Date('2021-09-10'))
    const isExpired = coupon.isExpired(new Date('2021-10-10'))
    expect(isExpired).toBeTruthy()
  })

  it('Deve criar um cupom de desconto que não expira', () => {
    const coupon = new Coupon("VALE20", 20)
    const isExpired = coupon.isExpired(new Date('2021-10-10'))
    expect(isExpired).toBeFalsy()
  })
})

