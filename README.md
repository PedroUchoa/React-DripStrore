<h1 align="center"> Drip Store </h1>
Drip Store é uma aplicação front-end feita com Typescript e a biblioteca React para a formação Full stack Geração Tech. Este projeto é uma landpage que simula uma loja de roupas virtual componsta por uma Página Inicial, Página de listagem de produtos e Página de Visualização do Produto.

## Tecnologias Utilizadas
- Typescript
- Vite
- React
- React Router
- Swiper

## 🚀 Começando
Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:

 ```bash
 git clone https://github.com/PedroUchoa/React-DripStrore
```

2. Navegue até o diretório do projeto:

 ```bash
 cd dripStore
```

3. Instale as dependências:

 ```bash
 npm install
```

### Uso
Para iniciar o projeto em modo de desenvolvimento, execute:

 ```bash
 npm run dev
```

Abra http://localhost:5173 para visualizar no navegador. A aplicação recarregará automaticamente se você fizer alterações no código.

Você também pode ver o site online no link: https://react-drip-strore-five.vercel.app/home

## Estrutura do Projeto
Uma breve descrição da estrutura do projeto e o que cada diretório ou arquivo importante contém.
```text
DripStore/
├── node_modules/
├── public/
├── src/
│   ├── Assets/ (Contem as imagens e icones do Projeto)
│   ├── components/ (Contem os components do Projeto)
│   ├── Interfaces/ (Contem as interfaces Typescript utilizadas)
│   ├── Pages(Contem as três páginas do projeto)
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Explicação dos components
- Buy Box: É o componente de card que se encontrna seção de itens em destaque na página principal.
- Footer: É o componente de Rodapé do site, reutilizado em todas as páginas.
- Header: É o componente de cabeçalho do site, é um menu que é reutilizado em todas as páginas.
- Product Card: É o componente de card dos produtos, utilizados para listagem e redirecionamento para a página de produtos.
- Product Listing: É um componente de wrapper feito para englobar e listar os cards de produtos.
- Slide Item: É o slide da página inicial feito com o swiper.

## Proximos passos
- Deixar a página totalmente responsiva
- Craição de uma Api para substituir os valores mockados por valores dinamicos 

## Contato

João Pedro Uchôa - joaopedrouchoacamposolimpio@gmail.com


