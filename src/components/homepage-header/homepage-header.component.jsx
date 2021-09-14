import React, {useState} from 'react';

import {HomapageHeaderContainer,
    HeaderTextContainer,
    HeaderTitle,
    InfoText,
    ButtonsContainer} from './homepage-header.styles';

import CustomButton from '../custom-button/custom-button.component';
import StatusFilter  from '../status-filter/status-filter.component';
import StatusDropDown from '../status-dropdown/status-dropdown.component';

const HomapageHeader =()=>{
  
    return(
        <HomapageHeaderContainer>
            <HeaderTextContainer>
                <HeaderTitle>Invoices</HeaderTitle>
                <InfoText>There are 7 total invoices</InfoText>
            </HeaderTextContainer>
            <ButtonsContainer>
             <StatusFilter></StatusFilter>
             <CustomButton isNewInvoice>New Invoice</CustomButton>
             </ButtonsContainer>
            
        </HomapageHeaderContainer>
    );
}

export default HomapageHeader;