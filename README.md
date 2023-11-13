# Ambiente de Desenvolvimento

## Instalação do Node.js

Vamos começar inicializando o nosso projeto no Node.js com o comando `npm init`.

Caso você não tenha o Node.js instalado, basta entrar em [nodejs.org](https://nodejs.org), baixar e instalar a versão LTS.

Eu sempre recomendo que você utilize a última versão estável. Fique atento caso esteja utilizando uma versão muito antiga.

## Inicialização do Projeto

Após inicializar o projeto, o arquivo package.json será criado. Lá vão ficar as dependências e também os scripts de execução tanto do TypeScript quanto dos testes.

## Instalação e Inicialização do TypeScript

Instale o TypeScript utilizando o comando abaixo:

\```
npm install typescript --save
\```

Depois disso, inclua no package.json esta linha em "scripts":

\```
"tsc:init": "tsc --init"
\```

Agora rode no terminal o seguinte comando:

\```
npm run tsc:init
\```

Com isso, o arquivo tsconfig.js deve ter sido criado e estamos prontos para começar.

## Instalação do Jest

Instale o Jest utilizando o comando abaixo:

\```
npm install jest --save-dev
npm install @types/jest --save-dev
\```

## Configuração do TypeScript

O TypeScript tem um compilador que faz a conversão do código para JavaScript. Por conta disso, precisamos definir alguns poucos parâmetros:

tsconfig.json

\```json
{
    "compilerOptions": {
        "incremental": true,
        "target": "es6",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true
    },
    "include": [
        "./src"
    ],
    "exclude": [
        "./node_modules"
    ]
}
\```

Fique totalmente à vontade para configurar de forma diferente.

## Criação dos scripts

Vamos criar mais alguns scripts para rodar o TypeScript e também o Jest:

\```json
"build": "tsc"
"test": "tsc && jest dist/"
\```

## Testando se tudo deu certo

Pronto, agora crie uma pasta chamada `src` e dentro dela crie dois arquivos:

**Circle.test.ts**

\```typescript
import Circle from "./Circle";

test("Should calculate the area of circle", function () {
    const circle = new Circle(2);
    expect(circle.getArea()).toBe(12.566370614359172);
});
\```

**Circle.ts**

\```typescript
export default class Circle {
    radius: number;

    constructor (radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return 2 * Math.PI * this.radius;
    }
}
\```

Agora basta executar:

\```
npm run test
\```

Se os testes tiverem sido executados com sucesso está tudo pronto!

# Explicação dos Principais Elementos

## `node-app`:
- **image:** `node:16`: Utiliza a imagem oficial do Node.js 16.
- **container_name:** Define o nome do contêiner.
- **working_dir:** Define o diretório de trabalho dentro do contêiner.
- **volumes:** Mapeia o diretório local `./app` para o diretório `/app` no contêiner.
- **command:** Executa os comandos `npm install` e `npm start`.
- **depends_on:** Especifica que este serviço depende do serviço `postgres`.

## `postgres`:
- **image:** `postgres:latest`: Utiliza a imagem oficial mais recente do PostgreSQL.
- **container_name:** Define o nome do contêiner.
- **environment:** Configura as variáveis de ambiente para o PostgreSQL (nome do banco de dados, usuário, senha).
- **volumes:** Mapeia o diretório local `./db_data` para o diretório `/var/lib/postgresql/data` no contêiner.

## Networks:
- **app-network:** Define uma rede chamada `app-network` que ambos os serviços se conectarão.

## Passo a Passo para Acessar o Banco de Dados e Executar Instruções SQL
`docker-compose up -d`

## Acesse o Contêiner do PostgreSQL:
- Você pode acessar o contêiner do PostgreSQL usando o seguinte comando:
`docker exec -it postgres-db psql -U myuser mydatabase`

Substitua `postgres-db`, `myuser` e `mydatabase` pelos valores que você definiu no arquivo `docker-compose.yml`.

## Execute Instruções SQL:
 - Dentro do contêiner PostgreSQL, você pode executar instruções SQL diretamente. Por exemplo, para criar uma tabela:

`CREATE TABLE users (`
  `id SERIAL PRIMARY KEY,`
  `username VARCHAR(50) NOT NULL`
`);`

Para inserir dados na tabela:
`INSERT INTO users (username) VALUES ('john_doe');`
Lembre-se de substituir esses exemplos por instruções SQL relevantes ao seu caso.

## Saia do Contêiner PostgreSQL:
- Quando terminar de executar instruções SQL, saia do contêiner PostgreSQL:
`\q`

## Para o Ambiente Docker:
- Quando você terminar de usar o ambiente, pare os contêineres com o seguinte comando:
`docker-compose down`

Este é um guia básico para iniciar e interagir com um ambiente Docker composto por um aplicativo Node.js e um banco de dados PostgreSQL. Lembre-se de personalizar o `docker-compose.yml` conforme necessário para atender às suas necessidades específicas.
