# Projeto Shopping List

Este repositório contém dois projetos:

- **Backend (server-shopping-list)**: Aplicação desenvolvida com [NestJS](https://nestjs.com/) e [TypeORM](https://typeorm.io/), integrando com um banco de dados PostgreSQL.
- **Frontend (project SOUV)**: Aplicação desenvolvida com [Next.js](https://nextjs.org/), Zustand e React Query que consome a API do backend.

---

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Considerações Finais](#considerações-finais)

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (para o backend)

---

## Configuração do Ambiente

### Backend

1. **Acesse a pasta do backend:**

   ```bash
   cd server-shopping-list
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou, se preferir:
   yarn install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz da pasta `server-shopping-list` com o seguinte conteúdo:

   ```env
   # Configurações do banco de dados PostgreSQL
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=nome_do_banco
   ```

   > **Atenção:** Ajuste os valores conforme a sua configuração local do PostgreSQL.

4. **Rodando o servidor em desenvolvimento:**

   Para iniciar o servidor com hot-reload, execute:

   ```bash
   npm run start:dev
   # ou
   yarn start:dev
   ```

   O backend ficará disponível em: `http://localhost:3000`

5. **Outros comandos úteis do backend:**

   - **Build do projeto:**

     ```bash
     npm run build
     # ou
     yarn build
     ```

   - **Iniciar o servidor em produção:**

     ```bash
     npm run start:prod
     # ou
     yarn start:prod
     ```

   - **Executar testes:**

     ```bash
     npm run test
     # ou
     yarn test
     ```

   - **Formatar o código:**

     ```bash
     npm run format
     # ou
     yarn format
     ```

   - **Rodar lint:**

     ```bash
     npm run lint
     # ou
     yarn lint
     ```

---

### Frontend

1. **Acesse a pasta do frontend:**

   ```bash
   cd "project SOUV"
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz da pasta `project SOUV` com o seguinte conteúdo:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
   ```

   Isso informa ao frontend onde encontrar a API do backend.

4. **Rodando o servidor em desenvolvimento:**

   Para iniciar o servidor de desenvolvimento (na porta 3001 conforme configurado nos scripts), execute:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O frontend ficará disponível em: `http://localhost:3001`

5. **Outros comandos úteis do frontend:**

   - **Build do projeto:**

     ```bash
     npm run build
     # ou
     yarn build
     ```

   - **Iniciar o servidor em produção:**

     ```bash
     npm run start
     # ou
     yarn start
     ```

   - **Formatar o código:**

     ```bash
     npm run format
     # ou
     yarn format
     ```

   - **Analisar o bundle:**

     ```bash
     npm run analyze
     # ou
     yarn analyze
     ```

   - **Limpar cache e reinstalar dependências:**

     ```bash
     npm run clean
     # ou
     yarn clean
     ```

---

## Considerações Finais

- **Banco de Dados:** Certifique-se de que o PostgreSQL esteja rodando e que as credenciais no arquivo `.env` do backend estejam corretas.
- **CORS:** O backend está configurado para aceitar requisições do `http://localhost:3001`. Caso altere a porta ou o domínio do frontend, atualize a configuração no `main.ts` do backend.
- **Dependências:** Caso ocorra algum problema com as dependências, tente remover a pasta `node_modules` e o arquivo `package-lock.json` (ou `yarn.lock`) e reinstalar tudo novamente com o comando `npm install` ou `yarn install`.

Caso tenha dúvidas ou precise de ajustes, sinta-se à vontade para abrir uma issue ou entrar em contato!
