import React, {useState} from 'react';


import {StatusFilterContainer, ImageContainer,
    TextContainer,
    ContentContainer} from './status-filter.styles';
import StatusDropDown from '../status-dropdown/status-dropdown.component';

import arrowDown from '../../assets/icon-arrow-down.svg';

const StatusFilter=()=>{
    const [hidden, setHidden]=useState(true);

    const handleOnClick=()=>{
        setHidden(!hidden);
    }
    console.log(hidden);
    return(
        <StatusFilterContainer>
             <ContentContainer onClick={handleOnClick} role="button" >
                 <TextContainer>Filter by status</TextContainer>
               {  hidden ?
                  <ImageContainer  src={arrowDown} up={false} ></ImageContainer> :
                 (
                    <ImageContainer  src={arrowDown} up={true}></ImageContainer>
                 )}
               
             </ContentContainer>
             {
                 hidden ?
                 null :
                 (
                     <StatusDropDown></StatusDropDown>
                 )
             }
           
        
        </StatusFilterContainer>
    );
}

export default StatusFilter;