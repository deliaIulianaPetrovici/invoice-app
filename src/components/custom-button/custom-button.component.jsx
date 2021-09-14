import React from 'react';


import {
    CustomButtonContainer,
    CustomButtonImageContainer
} from './custom-button.styles';

import iconPlus from '../../assets/icon-plus.svg';

const CustomButton = ({ children, ...props }) => {
    /*-> isNewInvoice is checking if the button is correspoding to the 
         New Invoice button and if so,
         it is adding the extra plus icon to the button layout.
     */
    const { isNewInvoice } = props;
    console.log(isNewInvoice);
    return (

        <CustomButtonContainer {...props}>
            {
                isNewInvoice ?
                    (
                        <CustomButtonImageContainer>
                            <img src={iconPlus}></img>
                        </CustomButtonImageContainer>
                    ) : null
            }

            {children}
        </CustomButtonContainer>

    )
};

export default CustomButton;
