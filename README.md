# Meu Projeto Node.js

Sistema para gerenciamento de usuários com Node.JS

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/hellenilda/Sistema-Node.JS.git
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
    ```

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


## Tecnologias utilizadas
- Node.js (npm/nodemon)
- Express
- Handlebars
- Sequelize
- DB Browser for SQLite