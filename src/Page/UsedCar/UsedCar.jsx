import React from 'react';
import UsedCarCover from './Sections/UsedCarCover';
import BrowseByMake from './Sections/BrowseByMake';
import BrowseByBody from './Sections/BrowseByBody';
import Ads from '../../Layouts/Sections/Ads';
import Reviews from '../../Layouts/Sections/Reviews';
import FooterCoaver from '../../Layouts/Sections/FooterCoaver';

const UsedCar = () => {
    return (
        <div>
            <div className='mb-20'>
                <UsedCarCover />
            </div>
            <BrowseByMake />
            <BrowseByBody />
            <Ads />
            <div className='mt-10'>
                <Reviews />
            </div>
            <FooterCoaver />
        </div>
    );
};

export default UsedCar;