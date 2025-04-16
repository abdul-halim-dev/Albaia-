// import { useEffect } from 'react';

// export const loadProducts = async () => {
//   const response = await import('../data/products.json');
//   return response.default;
// };

// export const useProducts = () => {
//   const [products, setProducts] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState(null);

//   useEffect(()=>{

//     const fetchProducts = async () => {
//       try {
//         const data = await loadProducts();
//         setProducts(data);
//   },[])
   