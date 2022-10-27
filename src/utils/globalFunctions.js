// função pura - pure function
export function calculateAverage(productList) {
   const sumPrice = productList
     .reduce((previous, current) => previous + current.price, 0);

   return sumPrice;
}