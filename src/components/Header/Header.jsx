// Header.js
import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
  const {user, onClose} = useTelegram();

  return (
    <div className={'header'}>
      <Button onClick={onClose} className={'close-button'}>Закрыть</Button>
      <span className={'app-name'}>ONOR_Shop</span>
      <link className={'username'}>{user?.username}</link>
    </div>
  );
};

export default Header;
