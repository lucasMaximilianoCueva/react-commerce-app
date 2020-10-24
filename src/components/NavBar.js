import React from 'react';
import CartWidget from './CartWidget';
import BannerTitle from './BannerTitle';

function NavBar() {
    return <header>
    <nav>
        <ul>
            <li><a href="home">Farmacéutica de sur</a></li>
            <li><a href="#one">Cuidado de la salud</a></li>
            <li><a href="#two">Cuidado personal</a></li>
            <li><a href="#two">Todas las categorias</a></li>
            <li><CartWidget /></li>
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