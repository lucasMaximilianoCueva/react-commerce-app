import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import BannerTitle from '../BannerTitle/BannerTitle';
import './Home.scss';

function Home() { 
    return  <> 
        <div>
        <div className="header-title">
            <BannerTitle
            title="Farmacéutica Del Sur"
            />
        </div>
            <ItemListContainer
            subtitle="Productos"
            />
        </div>
    </>
 }

 export default Home;