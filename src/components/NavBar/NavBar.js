import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import BannerTitle from '../BannerTitle/BannerTitle';

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
    
        <div className="header-title">
            <BannerTitle
            title="Banner Title"
            />
        </div>


</header>

}

export default NavBar;