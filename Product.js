import React from 'react';
import './product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="pro_comp">
      <div className="pro_name">
        <p>{title}</p>
      </div>
      <div className="pro_price">
        <p>{price}</p>
      </div>
      <div className="pro_rating">
  {typeof rating === 'number' &&
    Array(Math.floor(rating)).fill().map((_, i) => (
      <p key={i}>⭐</p>
    ))}
</div>
      <div>
        <center>
          <img src={image} className="pro_img" alt={title} />
        </center>
      </div>
      <div className="cart_b">
        <center>
          <button className="cart_button" onClick={addToCart}>
            Add to Cart
          </button>
        </center>
      </div>
    </div>
  );
}

export default Product;
