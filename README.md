<h2 align="center">feedbackers</h2>




<p align="center">
    <img alt="Last commit" src="https://img.shields.io/github/last-commit/eemr3/feedbackers"/>
  <img alt="Language top" src="https://img.shields.io/github/languages/top/eemr3/feedbackers"/>
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/eemr3/feedbackers"/>
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

___


## Descrição:

<p>Este projeto tem o objetivo de mostrar um painel com os feedbacks enviados pelo usuário através de um widget</p>
<p>Este projeto foi criado durante o curso de vuejs 3 minitrado <a href="https://treinamento.vuejsbrasil.org/">treinamento de Vue.js 3</a></p>

___


<h3 align="center">
  <a href="#factory-backend">Backend</a>&nbsp;|&nbsp;
  <a href="#pencil-dashboard">Dashboard</a>&nbsp;|&nbsp;
  <a href="#back-widget">Widget</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#link-como-contribuir">Como Contribuir</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___
## Dashboard

![Feedbacker](https://user-images.githubusercontent.com/42968718/110360431-788f5b80-801d-11eb-9d1a-9c6470f0b18a.png)

## Widget

![widget_botao](https://user-images.githubusercontent.com/42968718/110979166-054e5800-8343-11eb-8d8f-618f7ecab67b.png)
![widget_icones](https://user-images.githubusercontent.com/42968718/110979181-097a7580-8343-11eb-9cac-c5f5705dfe62.png)

## :factory: Backend

A pasta do backend gerencia toda manipulação de requisições ao banco de dados e ao usuário criador, gera um novo token de acesso, lista de feedbacks.

A estrutura do back-end está pronta.

Antes de executar os comandos, instale em seu sistema o <a href="https://www.docker.com/get-started"> ** Docker ** </a>. Para executar o backend use os comandos abaixo:

**instale as dependências:**
```sh
$ npm i ou yarn
```
**construir o back-end em um container de docker:**
```sh
$ npm run build ou yarn build
```
**  execução do container criado:**
```sh
$ npm run container ou yarn container
```

Este backend roda na porta ```3000```

___

## :pencil: Dashboard

TA pasta do painel é responsável por gerenciar a parte visual do aplicativo, criando uma lista de feedbacks com um filtro personalizado para que o usuário possa interagir

Antes de executar os comandos, instale em seu sistema o <a href="https://vuejs.org/"> ** vuejs ** </a>. Para executar o painel use os comandos abaixo:

**instale as dependências:**
```sh
$ npm i ou yarn
```
**executar aplicativo local ou desenvolvedor:**
```sh
$ npm run serve ou yarn serve
```
**execução de tests unit:**
```sh
$ npm run test:unit ou yarn test:unit
```
**execução de tests e2e:**
```sh
$ npm run test:e2e or yarn test:e2e
```
**executar construção para produção:**
```sh
$ npm run build ou yarn build
```

Este Dashboard é executado na porta ```8080```

___


## :back: Widget

O widget de pasta é responsável por criar um iframe utilizando algumas informações para criar o widget corretamente na página do cliente. Este widget é usado para obter o feedback do usuário e enviar o feedback para o painel onde o proprietário da página pode acessar.

Antes de executar os comandos, instale em seu sistema o <a href="https://vuejs.org/"> ** vuejs ** </a>. Para executar o widget use os comandos abaixo:

**instale as dependências:**
```sh
$ npm i ou yarn
```
**executar aplicativo local ou desenvolvedor:**
```sh
$ npm run serve ou yarn serve
```
**execução de tests unit:**
```sh
$ npm run test:unit ou yarn test:unit
```
**execução de tests e2e:**
```sh
$ npm run test:e2e ou yarn test:e2e
```

Este widget é executado na porta ```8080```

___


## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Nodejs](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Vuejs](https://vuejs.org/)
- [jest](https://jestjs.io/)
- [cypress](https://www.cypress.io/)
- [tailwind](https://tailwindcss.com/)
- [vue-test-utils](https://vue-test-utils.vuejs.org/)
- 
___

## :link: Como contribuir 

- Faça um Fork do repositório
- Clone o seu repositório
- Crie uma branch com a sua feature
- Faça um commit com suas mudanças
- 'Push' a sua branch
- Ir em Pull Requests do projeto original e criar uma pull request com o seu commit

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Feito com ❤️ por [Emerson Moreirea](https://www.linkedin.com/in/emerson-moreira/)
