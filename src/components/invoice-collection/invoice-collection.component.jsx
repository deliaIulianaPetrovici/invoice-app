import React from 'react';

import {InvoiceCollectionContainer} from './invoice-collection.styles';

import InvoicePreview from '../invoice-preview/invoice-preview.components';
import {data} from './data';

const InvoiceCollection=()=>{
   
    return(
        <InvoiceCollectionContainer>
            {
                data.map(({id, ...otherCollectionProps})=>(
                    <InvoicePreview key={id} id={id} {...otherCollectionProps}/>
                ))
            }
            

        </InvoiceCollectionContainer>

    )
}

export default InvoiceCollection;