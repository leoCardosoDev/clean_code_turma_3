module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/test"], // Adiciona o diretório de testes fora do src
  testMatch: ["**/*.test.ts"], // Padrão de nomenclatura para os arquivos de teste
  transform: {
    "^.+\\.ts$": "babel-jest", // Usa o Babel para transpilar arquivos JavaScript
  },
  moduleNameMapper: {
    // Mapeia módulos para substituir importações durante os testes
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
