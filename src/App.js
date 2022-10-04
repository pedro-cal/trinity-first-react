import { useState, useEffect } from 'react';
import './App.css';
import Product from './Product';

// Side-effects - efeitos colaterais (coisas que têm influência ou dependência de fatores externos)
// useEffect recebe 2 argumentos
// 1) uma arrow function que vai executar o código que a gente quer
// 2) um array de dependências (variáveis que o React usa pra controlar quando executar esse código)

function App() {
   const [apiProducts, setApiProducts] = useState(false);

   useEffect(() => {
      fetch('https://dummyjson.com/products')
         .then(res => res.json())
         .then(jsonRes => setApiProducts(jsonRes.products));
   }, []);

  return (
    <div>
      {apiProducts ? apiProducts.map((product) => (
        <Product productData={product}/>
      )) : null}
    </div>
  );
}

export default App;
