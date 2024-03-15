
import React, { useEffect } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productsSlice';
import{STATUSES} from'../store/productsSlice'
import { ImSpinner } from "react-icons/im";
import '../index.css'
function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product); // Adjusted to match slice name

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className='productsWrapper'>
      {status === STATUSES.LOADING ? (
       <div className='spinnerWrapper'>
       <ImSpinner className='spinner' />
     </div>

      ) : status === STATUSES.ERROR ? ( // Changed to match slice status values
        <div>Error fetching products</div>
      ) : (
        products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt='' />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className='btn'>
              Add to cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Products;
