import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import BannerTitle from '../BannerTitle/BannerTitle';
import './Home.scss';
import Footer from '../Footer/Footer';

function Home() { 
    return  <> 
        <div>
        <div className="header-title">
            <BannerTitle
            title="Cloud Pharma"
            />
        </div>
            <ItemListContainer
            subtitle="Productos"
            />
        </div>
        <Footer />
    </>
 }

 export default Home;