import { useState, useEffect } from 'react';
import './App.css';
import Product from './Product';
import { v4 } from 'uuid';
import { calculateAverage } from './utils/globalFunctions';

// Side-effects - efeitos colaterais (coisas que têm influência ou dependência de fatores externos)
// useEffect recebe 2 argumentos
// 1) uma arrow function que vai executar o código que a gente quer
// 2) um array de dependências (variáveis que o React usa pra controlar quando executar esse código)

function App() {
   const [apiProducts, setApiProducts] = useState(false);
   const [showableProducts, setShowableProducts] = useState(false);
   const [productInput, setProductInput] = useState('');
   const [priceInput, setPriceInput] = useState('');
   const [isEditing, setIsEditing] = useState(false);

   function handleAddProduct() {
    if (!isEditing) {
      const newProduct = {
        id: v4(),
        title: productInput,
        price: priceInput,
      };

      console.log('newProduct:\n', newProduct);

      //spread operator
      const updatedProducts = [
        ...showableProducts,
        newProduct,
      ];

      setShowableProducts(updatedProducts);
    }
    const editedProductIndex = showableProducts.findIndex((prod) => prod.id === isEditing);
    const editedProduct = showableProducts.find((prod) => prod.id === isEditing);

    editedProduct.title = productInput;
    editedProduct.price = priceInput;

    const updatedProducts = [...showableProducts];
    updatedProducts.splice(editedProductIndex, 1, editedProduct);
    setShowableProducts(updatedProducts);

   }

   function handleEditProduct(id) {
    const editedProduct = showableProducts.find((prod) => prod.id === id);
    console.log(editedProduct);

    setProductInput(editedProduct.title);
    setPriceInput(editedProduct.price);
    setIsEditing(id);
   }

   function handleDeleteProduct(id) {
    const updatedProducts = showableProducts.filter((each) => each.id !== id);

    setShowableProducts(updatedProducts);
   }

   useEffect(() => {
      fetch('https://dummyjson.com/products')
         .then(res => res.json())
         .then(jsonRes => {
          setApiProducts(jsonRes.products);
          setShowableProducts(jsonRes.products);
        });
   }, []);

  return (
    <div>
      {showableProducts ? showableProducts.map((product) => (
        <Product
          key={product.id}
          productData={product}
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
        />
      )) : null}
      <br/>
      <div>Reduce</div>
      <div>
        {apiProducts && calculateAverage(apiProducts)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
        <label htmlFor="product-input">Product Name</label>
        <input
          type="text"
          name="product-input"
          id="product-input"
          value={productInput}
          onChange={(event) => setProductInput(event.target.value)}
        />

        <label htmlFor="product-price">Price</label>
        <input
          type="text"
          name="product-price"
          id="product-price"
          value={priceInput}
          onChange={(event) => setPriceInput(event.target.value)}
        />

        {/* <button>Cancel</button> */}
        <button onClick={(e) => handleAddProduct(e)}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default App;
