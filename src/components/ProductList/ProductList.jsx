import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";


const products = [
    {id: '1', title: 'Сумка Fila', price: 1000, description: 'Оригинал', img: '/img/IMAGE 1.jpg'},
    {id: '2', title: 'Сумка Fila', price: 700, description: 'Оригинал, новая', img: '/img/IMAGE 2.jpg'},
    {id: '3', title: 'Сумка Puma', price: 1000, description: 'Черного цвета, оригинал', img: '/img/IMAGE 3.jpg'},
    {id: '4', title: 'Телефон samsung A15', price: 15000, description: 'Новый, на гарантии', img: '/img/IMAGE 4.jpg'},
]


const App = () => {
    const handleAdd = (product) => {
        console.log("Товар добавлен в корзину:", product);
    };

    return (
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} onAdd={handleAdd} />
          ))}
      </div>
    );
};
export default App;