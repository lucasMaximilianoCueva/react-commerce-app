import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.scss';

const staticCategories = [
    { id: 'cuidado de la salud', name: 'Cuidado De La Salud' },
    { id: 'cuidado personal', name: 'Cuidado Personal' },
    { id: 'ofertas', name: 'Ofertas' }
  ];

function Footer() { 
    return (
    <footer>
        <nav class="footer-inner">
            <section className="footer-item">
            <Link to="/"><img style={{ width: 50 }} src="../../../cross.png" alt="farmaceutica del sur" /></Link>
                <h2><b className="color">Farmacéutica Del Sur</b>, Tú Salud.</h2>
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
                <Link>
                <p>Salaberry 760</p>
                <p>Claypole, Buenos Aires</p>
                <p>Argentina</p>
                </Link>
            </section>   

            <section className="footer-item">
                <h3>Seguinos</h3>
                <ul>
                    <li><Link>Instagram</Link></li>
                    <li><Link>Twitter</Link></li>
                    <li><Link>LinkedIn</Link></li>
                </ul>
            </section>
        
            <section className="footer-item">
                <h3>Legal</h3>
                <ul>
                    <li><Link>Terms</Link></li>
                    <li><Link>Privacy</Link></li>
                </ul>
            </section>
          
            <section className="footer-item">
                <Link className="footer-button">Acceder</Link>
            </section>
          
            <section class="footer-item">
                <h3>Contactanos</h3>
                    <p className="desktop"><Link>fds.farmacia80@gmail.com</Link></p>
                    <p className="mobile"><Link>Email us</Link></p>
                    <p><Link>1535838325</Link></p>
            </section>
        </nav>
    </footer>);
 }

 export default Footer;

 