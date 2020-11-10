import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartWidget from '../CartWidget/CartWidget';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }

  .cart {
    padding: 15px 60px;
  }
`

const Navbar = () => {
  return (
    <header style={{ height: 60 }}>
    <Nav>
      <div className="logo">
        <Link to="/">Farmacia</Link>
      </div>
      <div className="cart">
        <Link to="/cart"><CartWidget /></Link>
      </div>
      <Burger />
    </Nav>
    </header>
  )
}

export default Navbar
