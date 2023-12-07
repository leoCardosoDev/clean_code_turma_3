import Cpf from "../../src/domain/entity/cpf"

test("Deve validar um CPF", () => {
  const cpf = new Cpf("847.903.332-05")
  expect(cpf).toBeDefined()
})

test("Não deve validar um CPF", () => {
  expect(() => new Cpf("111.111.111-11")).toThrow(new Error("Invalid cpf"))
})
