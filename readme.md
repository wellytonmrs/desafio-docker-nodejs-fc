# Nginx com Node.js - Desafio Full Cycle

Este projeto é parte do curso Full Cycle 3.0, módulo Docker. O desafio implementa uma aplicação utilizando Nginx como proxy reverso para uma aplicação Node.js, que por sua vez interage com um banco de dados MySQL.

## 🎯 Desafio

O desafio consistia em:
1. Criar uma aplicação Node.js que:
   - Se conecte com um banco de dados MySQL
   - Cadastre dados na tabela "people"
   - Retorne na rota principal (`/`):
     - A mensagem "Full Cycle Rocks!"
     - A lista de nomes cadastrados no banco
2. Configurar o Nginx como proxy reverso para a aplicação Node.js
3. Disponibilizar tudo na porta 8080

## 🚀 Como Executar

1. Clone o repositório
```bash
git clone [url-do-repositório]
```

2. Execute com Docker Compose
```bash
docker-compose up -d
```

3. Acesse no navegador
```
http://localhost:8080
```

4.Para parar o container:
```
docker-compose down
```

## 🏗️ Arquitetura

O projeto é composto por três serviços principais:

### 1. Nginx
- Atua como proxy reverso
- Redireciona as requisições para a aplicação Node.js
- Expõe a porta 8080

### 2. Node.js
- Aplicação principal em Express
- Conecta-se ao MySQL
- Gerencia as operações no banco de dados
- Retorna o HTML com a lista de nomes

### 3. MySQL
- Banco de dados
- Armazena os registros na tabela "people"
- Dados persistidos através de volumes Docker

## 📁 Estrutura do Projeto

```
.
├── docker-compose.yml
├── Dockerfile
├── index.js
├── init.sql
├── package.json
├── nginx/
│   ├── Dockerfile
│   └── nginx.conf
└── mysql/
```

## 🔧 Configurações

### Volumes
- `/usr/src/app` - Código da aplicação Node.js
- `/var/lib/mysql` - Dados do MySQL

### Portas
- Nginx: 8080:80
- Node.js: 3000 (interno)
- MySQL: 3306 (interno)

### Redes
- Rede bridge para comunicação entre os containers

## 💻 Desenvolvimento

Para desenvolvimento local, os volumes estão configurados para refletir alterações em tempo real no código da aplicação Node.js.

## 🐳 Docker Compose

O arquivo `docker-compose.yml` orquestra todos os serviços necessários:
- Configuração dos containers
- Gerenciamento de volumes
- Configuração de redes
- Variáveis de ambiente
- Dependências entre serviços

## 📋 Requisitos

- Docker
- Docker Compose

## 🔍 Testando

Após executar o projeto, você deverá ver:
1. A mensagem "Full Cycle Rocks!"
2. Uma lista de nomes cadastrados no banco de dados
3. Tudo funcionando através da porta 8080

## 📝 Licença

Este projeto está sob a licença MIT.