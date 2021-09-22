<p align="center">
	<img src="https://i.imgur.com/cPJUcIU.png" width="600">
</p>

<p align="center">
 <a href="https://www.typescriptlang.org/" target="_blank">
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/></a>
 <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a>
 <a href="https://redux.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a>
</p>

## Introdução

A aplicação Marvel-Characters foi desenvolvida utilizando a biblioteca [ReactJS](https://reactjs.org/) com a linguagem [Typescript](https://www.typescriptlang.org/) tendo como objetivo a criação de uma aplicação capaz de apresentar ao usuário uma lista contendo os personagens presentes na [API da Marvel](https://developer.marvel.com/docs), a navegação para página de cada personagem e a edição de dados apenas em client-side.

Esse projeto faz parte de um desafio, onde possuía alguns requisitos obrigatórios, tais como, utilizar o [Redux](https://redux.js.org/) para gerenciamento de estado da aplicação, utilizar o [react-router](https://reactrouter.com/) para realizar a navegação entre páginas e também a biblioteca de testes [@testing-library/react](https://testing-library.com/docs/) para realização de testes da aplicação.


## Instalação e Uso

Tenha instalado o [Node >= 10.16 e npm >= 5.6](https://nodejs.org/pt-br/) para executar o projeto ReactJS em seu computador.
Certifique-se de criar uma conta na [API da Marvel](https://developer.marvel.com/docs) e gere sua ``publickey`` e ``privatekey``. Elas serão utilizas posteriormente para configuração da aplicação.


### Configurando e Executando o projeto

1. Clone esse repositório:

```
git clone https://github.com/EduMOliveira/marvel-characters.git
cd marvel-characters
```

2. Adicione suas chaves ``publickey`` e ``privatekey`` no arquivo ``.env``.

	*(**AVISO**: Para fins de avaliação as keys já estão contidas no arquivo ``.env``. Caso seja de sua vontade, pule esta etapa!)*
```
REACT_APP_PUBLIC_KEY=<sua public key>
REACT_APP_PRIVATE_KEY=<sua private key>
```

3. Instale o [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable):

```
npm install -g yarn
```
4. Instale as dependências:

```
yarn install
```
5. Execute a Aplicação:

```bash
yarn start
```

### Testes
1. Execute os Testes:

```
yarn test
```

## Autor
<p align="left">  
<a href="https://github.com/EduMOliveira" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="EduMOliveira" height="30" width="40" /></a> 
<a href="https://www.linkedin.com/in/eduardomichelsoliveira/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="eduardo-michels-1b17b4203" height="30" width="40"/></a> 
</p>
