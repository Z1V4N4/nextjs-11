import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productActions';

const DataInfo = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DataInfo;