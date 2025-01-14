import React, {useState} from 'react';
import Button from "../Button/Button";
import './ProductItem.css';


const ProductItem = ({ product, onAdd }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product);
    setIsAdded(!isAdded);
  };

  return (
    <div className="product-card">
      <img src={product.img} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price} ₽</span>
          <button className="add-to-cart-btn" onClick={handleAdd}>
            {isAdded ? "Удалить" : "Добавить"}
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductItem;
