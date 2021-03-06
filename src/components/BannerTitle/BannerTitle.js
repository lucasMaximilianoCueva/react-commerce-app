import React from 'react';
import './BannerTitle.scss'

function BannerTitle( { title } ) {
    return ( <>
        <h1 className="banner-title">
            {title}
        </h1>
    </>
    );
}

export default BannerTitle;