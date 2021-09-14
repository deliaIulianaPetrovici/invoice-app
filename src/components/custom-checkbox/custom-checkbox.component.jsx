import React from 'react';

import {CheckboxContainer,
    HiddenCheckbox,
    StyledCheckbox,
    CheckboxIcon} from './custom-checkbox.style';

const CustomCheckbox=({checked, ...props})=>(
    <CheckboxContainer >
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} >
      <CheckboxIcon/>
    </StyledCheckbox>

  </CheckboxContainer>
);


export default CustomCheckbox;