import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return <header>
    <nav>
        <ul>
            <li>
                <Link to="/">Farmacéutica del sur</Link>
            </li>
            <li>
                <Link to="/cart"><CartWidget /></Link>
            </li>
        </ul>

    </nav>
</header>

}

export default NavBar;