import React, {useState} from 'react';

import CustomCheckbox from '../custom-checkbox/custom-checkbox.component';

import {StatusDropDownContainer,CheckboxesContainer,
    CustomCheckboxSpan} from './status-dropdown.styles';

const StatusDropDown=()=>{
    const [checkedDraft, setcheckedDraft]=useState(true);
    const [checkedPending, setcheckedPending]=useState(true);
    const [checkedPaid, setheckedPaid]=useState(true);
    

    const handleDraftChange=event=>{
      setcheckedDraft(!checkedDraft);
    }
    const handlePendingChange=event=>{
      setcheckedPending(!checkedPending);
    }
    const handlePaidChange=event=>{
      setheckedPaid(!checkedPaid);
    }
    return(
 <StatusDropDownContainer>
     <CheckboxesContainer>
     <label>
          <CustomCheckbox
            checked={checkedDraft}  
            onChange={handleDraftChange}
          />
          <CustomCheckboxSpan>Draft</CustomCheckboxSpan>
        </label>
        <label>
          <CustomCheckbox
            checked={checkedPending}  
            onChange={handlePendingChange}
          />
          <CustomCheckboxSpan>Pending</CustomCheckboxSpan>
        </label>
        <label>
          <CustomCheckbox
            checked={checkedPaid}  
            onChange={handlePaidChange}
          />
          <CustomCheckboxSpan>Paid</CustomCheckboxSpan>
        </label>
        </CheckboxesContainer>
 </StatusDropDownContainer>
)};

export default StatusDropDown;