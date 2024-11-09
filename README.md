## Desafio de Estágio - AAWZ Partners

Este repositório contém o código desenvolvido para o desafio de estágio da AAWZ Partners. Abaixo estão as instruções de instalação das dependências, bem como observações importantes sobre o comportamento do aplicativo.

### Visualização Online

Você pode acessar o aplicativo aqui: [Desafio Estágio AAWZ Partners](https://herikr0drigues.github.io/aawz-test/).

## 🚀 Funcionalidades

- Cadastro de usuários com armazenamento local via `LocalStorage`.
- Exibição de uma tabela com todos os usuários cadastrados.
- Exibição de dois gráficos com resumos detalhados dos usuários cadastrados.
- Funções de **Excluir todos os usuários** (remove os dados armazenados) e **Importar usuários** (carrega um arquivo JSON com dados pré-cadastrados hospedados em um bucket AWS).

## ⚙️ Tecnologias

- **Frontend**: React, Vite, Tailwind CSS
- **API**: ViaCEP (para busca de endereços)
- **Hospedagem**: GitHub Pages

## 🛠️ Como rodar o projeto localmente

### Requisitos

- [Git](https://git-scm.com/) (Para clone do projeto via VSCode)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)

### Passos

1. Clone o repositório:
    ```bash
    git clone https://github.com/HerikR0drigues/aawz-test
    ```

2. Instale as dependências e inicie o projeto.
    ```bash
    npm install
    npm run dev
    ```

## Estrutura do Projeto
- Dentro de /`src` contem o arquivo principal `App.jsx` que contém a renderezação de todos os componentes, que por sua vez, estão localizado em /`src`/`components`.
