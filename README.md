# Meu Projeto Node.js

Sistema para gerenciamento de usuários com Node.JS

## Tecnologias utilizadas
- [Node.js](https://nodejs.org/en/download/prebuilt-installer)
- [Express](https://expressjs.com/)
- [Handlebars](https://handlebarsjs.com/)
- [Sequelize](https://sequelize.org/)
- [DB Browser for SQLite](https://sqlitebrowser.org/)

## Instalação
1. Clone e entre no repositório:
    ```sh
    git clone https://github.com/hellenilda/Sistema-Node.JS.git
    ```
    ```sh
    cd Sistema-Node.JS/
    ```

2. Instale as dependências:
    ```sh
    npm install -g express
    npm install --save sequelize
    npm install --save express-handlebars
    ```

3. Configure o banco de dados:
    - Utilize o DB Browser for SQLite para criar e configurar seu banco de dados SQLite.
    - O arquivo de configuração do BD deste projeto se encontra em /db/banco.db

## Uso
1. Inicie o servidor:
    ```sh
    nodemon app.js
    ```

2. Acesse o aplicativo em seu navegador:
    ```sh
    http://localhost:3000
    ```

## Estrutura do Projeto

```plaintext
├── db
│   └── banco.db
├── models
│   └── index.js
│   └── user.js
├── views
│   └── layouts
│       └── main.handlebars
├── app.js
├── package-lock.json
├── package.json
└── README.md
```
