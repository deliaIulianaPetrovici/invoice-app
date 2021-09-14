import styled,{css} from 'styled-components';


const styledLabel=css`
label{
    
    display: flex;
    align-items: center;
    padding: 5px 10px;
}
`;

export const StatusDropDownContainer=styled.div`
position:absolute;
display:flex;
margin-top:15px;
background-color: #FFFFFF;
box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
border-radius: 8px;

width:192px;
height: 128px;
top: 10px;

z-index: 5;


`;
export const CheckboxesContainer=styled.div`
height: 100px;
display: flex;
flex-direction: column;
margin:auto 20px;
justify-content:center;
${styledLabel}

`;
export const CustomCheckboxSpan=styled.span`
color:#1E2139;
margin-left:15px;

font-weight:700;
font-size:12px;
line-height:15px;
letter-spacing: -0.25px;
`;