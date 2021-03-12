
<p align="center">
    <img alt="Janapc logo" src="./dashboard/src/assets/images/logo_white.png" width="200" />
</p>

<p align="center">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/eemr3/feedbackers"/>
  <img alt="Language top" src="https://img.shields.io/github/languages/top/eemr3/feedbackers"/>
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/eemr3/feedbackers"/>
  <img alt="CI Dashboard e2e" src="https://github.com/eemr3/feedbackers/actions/workflows/ci-dashboard-e2e.yml/badge.svg"/>
  <img alt="CI Dashboard Unit" src="https://github.com/eemr3/feedbackers/actions/workflows/ci-dashboard-unit.yml/badge.svg"/>
  <img alt="CI Widget e2e" src="https://github.com/eemr3/feedbackers/actions/workflows/ci-widget-e2e.yml/badge.svg"/>
  <img alt="CI Widget Unit" src="https://github.com/eemr3/feedbackers/actions/workflows/ci-widget-unit.yml/badge.svg"/>
  <img alt="Netlify sStatus" src="https://api.netlify.com/api/v1/badges/151ad7c6-896c-4791-a297-4be5040c8ece/deploy-status"/>
</p>

***

## Descrição:

<p>Este projeto tem o objetivo de mostrar um painel com os feedbacks enviados pelo usuário através de um widget</p>
<p>Este projeto foi criado durante o curso de vuejs 3 minitrado <a href="https://treinamento.vuejsbrasil.org/">treinamento de Vue.js 3</a></p>

***

<p align="center">
  
  <a href="#backend-gear">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#dashboard-bar_chart">Dashboard</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#widget-dart">Widget</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies-boom">Technologies</a>
</p>

***

**Dashboard**:

![Feedbacker](https://user-images.githubusercontent.com/42968718/110360431-788f5b80-801d-11eb-9d1a-9c6470f0b18a.png)

**Widget**:

![widget](https://user-images.githubusercontent.com/42968718/110856665-b4812580-8296-11eb-9154-11b0a4f903bb.png)
![widget (1)](https://user-images.githubusercontent.com/42968718/110856677-b77c1600-8296-11eb-85c5-3c10db9c1147.png)

***

## Backend: 
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

***

## Dashboard: 
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

***
## Widget:
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

***

## Tecnologias: 
Este projeto contém essas tecnologias:

- [Nodejs](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Vuejs](https://vuejs.org/)
- [jest](https://jestjs.io/)
- [cypress](https://www.cypress.io/)
- [tailwind](https://tailwindcss.com/)
- [vue-test-utils](https://vue-test-utils.vuejs.org/)

***

<br>

### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">Feito com ❤️ por <strong>Emerson Moreira :wave: </p>
