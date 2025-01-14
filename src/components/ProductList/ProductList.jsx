import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";


const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые', img: '/img/IMAGE 1.jpg'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая', img: '/img/IMAGE 2.jpg'},
    {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые', img: '/img/IMAGE 3.jpg'},
]




export default ProductList;
