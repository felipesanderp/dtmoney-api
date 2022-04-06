<h1 align="center">
    <img alt="dtmoney" src="https://res.cloudinary.com/felipesanderp/image/upload/v1649174913/readme_logos/logo-dtmoneyapi_yowwqg.svg" />
    <br>
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/felipesanderp/dtmoney-api.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/felipesanderp/dtmoney.svg">
  
   <a href="https://www.codefactor.io/repository/github/felipesanderp/dtmoney-api">
     <img src="https://www.codefactor.io/repository/github/felipesanderp/dtmoney-api/badge"  alt="CodeFactor" />
   </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/felipesanderp/dtmoney-api.svg">
  <a href="https://github.com/felipesanderp/dtmoney-api/commits/">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/felipesanderp/dtmoney-api.svg">
  </a>

  <a href="https://github.com/felipesanderp/dtmoney-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/felipesanderp/dtmoney-api.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/felipesanderp/dtmoney-api">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido como parte do curso [**Ignite**](https://www.rocketseat.com.br/ignite) da Rocketseat, com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [VSCode](https://code.visualstudio.com/)

## :information_source: Como usar

Para utilizar essa API, você precisa das seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker e Docker Compose](https://www.notion.so/Docker-e-Docker-Compose-16771f2ceefe4a05a8c29df4ca49e97a), [Yarn](https://yarnpkg.com/) instalados e configurados no seu computador. Além disso é bom ter um editor para trabalhar com o código, como [VSCode](https://code.visualstudio.com/) e um cliente de API, como o [Insomnia](https://insomnia.rest/download), para fazer as requisições sem precisar de uma aplicação Front-end.


```bash

# Clone este repositório
$ git clone https://github.com/felipesanderp/dtmoney-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd dtmoney-api

# Instale as dependências
$ yarn

# Inicie os containers do Docker
$ docker-compose up -d

# Ainda no terminal, verifique se os containers do Docker estão executando
$ docker ps -a

<Você devera ver dois containers, com nomes: dtmoney_api e database_dtmoney>

# Crie as tabelas do banco de dados
$ yarn typeorm migration:run
```

##### Se tudo ocorreu bem, você poderá fazer as requisições para a API no endereço **http://localhost:3333/api/v1** e se conectar no banco de dados Postgres no endereço localhost:5432/database_dtmoney


## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/felipesanderp/dtmoney/blob/master/LICENSE) for more information.

---

Made with ♥ by Felipe Sander :wave: [Get in touch!](https://www.linkedin.com/in/felipesander)
