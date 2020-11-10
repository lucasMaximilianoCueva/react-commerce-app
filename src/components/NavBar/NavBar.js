import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return <header>
    <nav>
        <ul>
            <li><a href="home">Farmacéutica de sur</a></li>
            <li>
                <CartWidget />
            </li>
        </ul>

    </nav>
</header>

}

export default NavBar;