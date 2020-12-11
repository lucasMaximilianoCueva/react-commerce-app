import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.scss';

const staticCategories = [
    { id: 'cuidado de la salud', name: 'Cuidado De La Salud' },
    { id: 'cuidado personal', name: 'Cuidado Personal' },
    { id: 'oferta', name: 'Ofertas' }
  ];

function Footer() { 
    return (
    <footer>
        <nav className="footer-inner">
            <section className="footer-item">
            <Link to="/"><img style={{ width: 50, marginLeft: "53px" }} src="../../../cross.png" alt="farmaceutica del sur" /></Link>
                <h2><b className="color">Cloud Pharma</b>, Tú Salud.</h2>
            </section>

            <section className="footer-item">
                <h3>Explorar</h3>
                <ul>
                    <li><Link to="/">Página Principal</Link></li>
                    {staticCategories.map(cat =>
                        <li key={cat.id}>
                            <NavLink to={`/category/${cat.id}`} style={{textDecoration: "none"}} className="nav-link">{cat.name}</NavLink>
                    </li>)}
                </ul>
            </section>
          
            <section className="footer-item">
                <h3>Visitanos</h3>
                <Link to="">
                <p>Salaberry 760</p>
                <p>Buenos Aires</p>
                <p>Argentina</p>
                </Link>
            </section>   

            <section className="footer-item">
                <h3>Seguinos</h3>
                <ul>
                    <li><Link to="">Instagram</Link></li>
                    <li><Link to="">Facebook</Link></li>
                </ul>
            </section>
        
            <section className="footer-item">
                <h3>Legal</h3>
                <ul>
                    <li><Link to="">Terminos</Link></li>
                    <li><Link to="">Privacidad</Link></li>
                </ul>
            </section>
          
            <section className="footer-item">
                <Link to="" className="footer-button">Acceder</Link>
            </section>
          
            <section className="footer-item">
                <h3>Contactanos</h3>
                    <p className="desktop"><Link to="">cloudpharma@sales.com</Link></p>
                    <p className="mobile"><Link to="">Email us</Link></p>
                    <p><Link to="">+54 1535838925</Link></p>
            </section>
        </nav>
    </footer>);
 }

 export default Footer;

 