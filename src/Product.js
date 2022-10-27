function Product(props) {
   const { productData, onDelete, onEdit } = props;
   return (
      <div>
         <span>{productData.title} | {productData.price}</span>

         <span
            style={{ textDecoration: 'underline' }}
            onClick={() => onEdit(productData.id)}
         > Edit </span>
         
         <span
            style={{ textDecoration: 'underline' }}
            onClick={() => onDelete(productData.id)}
         >Delete </span>
      </div>
   );
}

export default Product;