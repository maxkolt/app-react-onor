import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product); // Сначала добавляем товар
    window.location.href = 'https://t.me/max12kolt'; // Затем выполняем редирект
  };

  return (
    <div className={'product ' + className}>
      <img src={product.img} alt={product.title} className={'product-img'} />
      <div className={'title'}>{product.title}</div>
      <div className={'description'}>{product.description}</div>
      <div className={'price'}>
        <span>Стоимость: <b>{product.price} ₽</b></span>
      </div>
      <Button className={'add-btn'} onClick={onAddHandler}>
        Написать
      </Button>
    </div>
  );
};

export default ProductItem;
