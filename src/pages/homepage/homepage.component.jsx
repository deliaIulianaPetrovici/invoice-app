import React from 'react';

import {HomePageContainer} from './homepage.styles';

import HomapageHeader from '../../components/homepage-header/homepage-header.component';
import InvoiceCollection from '../../components/invoice-collection/invoice-collection.component';

const Homepage=()=>{

    return(
        <HomePageContainer>
            <HomapageHeader/>
            <InvoiceCollection/>
        </HomePageContainer>
    );
}

export default Homepage;