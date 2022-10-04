function Product(props) {
   const { productData } = props;
   return (
      <div>
          <span>{productData.title} | {productData.price} | {productData.rating}</span>
          teste
        </div>
   );
}

export default Product;