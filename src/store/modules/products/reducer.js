import { ADD_PRODUCT } from "./actionsTypes";

const products = [
  {
    id: 0,
    name: "PASTA DE CASTANHA DE CAJU COM COOKIES & CREAM (150G)",
    price: 22.49,
    image:
      "https://nakednuts.com.br/wp-content/uploads/2020/02/Cast.-Cookies-150g.png",
  },
  {
    id: 1,
    name: "PASTA DE CASTANHA DE CAJU COM CHOCOLATE BELGA CROCANTE (150G)",
    price: 22.49,
    image:
      "https://nakednuts.com.br/wp-content/uploads/2020/02/Cast.-Belga-150g.png",
  },
  {
    id: 2,
    name: "PASTA DE CASTANHA DE CAJU COM CHOCOLATE BELGA CROCANTE (150G)",
    price: 22.49,
    image:
      "https://nakednuts.com.br/wp-content/uploads/2020/02/Cast.-Belga-150g.png",
  },
  {
    id: 3,
    name: "PASTA DE CASTANHA DE CAJU COM CHOCOLATE BELGA CROCANTE (150G)",
    price: 22.49,
    image:
      "https://nakednuts.com.br/wp-content/uploads/2020/02/Cast.-Belga-150g.png",
  },
  {
    id: 4,
    name: "PASTA DE CASTANHA DE CAJU COM CHOCOLATE BELGA CROCANTE (150G)",
    price: 22.49,
    image:
      "https://nakednuts.com.br/wp-content/uploads/2020/02/Cast.-Belga-150g.png",
  },
  {
    id: 5,
    name: "PASTA DE CASTANHA DE CAJU COM CHOCOLATE BELGA CROCANTE (150G)",
    price: 22.49,
    image:
      "https://nakednuts.com.br/wp-content/uploads/2020/02/Cast.-Belga-150g.png",
  },
  {
    id: 6,
    name: "PASTA DE CASTANHA DE CAJU COM CHOCOLATE BELGA CROCANTE (150G)",
    price: 22.49,
    image:
      "https://nakednuts.com.br/wp-content/uploads/2020/02/Cast.-Belga-150g.png",
  },
  {
    id: 7,
    name: "PASTA DE CASTANHA DE CAJU COM CHOCOLATE BELGA CROCANTE (150G)",
    price: 22.49,
    image:
      "https://nakednuts.com.br/wp-content/uploads/2020/02/Cast.-Belga-150g.png",
  },
  {
    id: 8,
    name: "PASTA DE CASTANHA DE CAJU COM CHOCOLATE BELGA CROCANTE (150G)",
    price: 22.49,
    image:
      "https://nakednuts.com.br/wp-content/uploads/2020/02/Cast.-Belga-150g.png",
  },
  {
    id: 9,
    name: "PASTA DE CASTANHA DE CAJU COM CHOCOLATE BELGA CROCANTE (150G)",
    price: 22.49,
    image:
      "https://nakednuts.com.br/wp-content/uploads/2020/02/Cast.-Belga-150g.png",
  },
  {
    id: 10,
    name: "PASTA DE CASTANHA DE CAJU COM CHOCOLATE BELGA CROCANTE (150G)",
    price: 22.49,
    image:
      "https://nakednuts.com.br/wp-content/uploads/2020/02/Cast.-Belga-150g.png",
  },
];

const productsReducer = (state = products, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const product = action.product;
      return [...state, product];
    default:
      return state;
  }
};

export default productsReducer;
