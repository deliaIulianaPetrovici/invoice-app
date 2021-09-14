import styled, { css } from 'styled-components';



export const StatusFilterContainer = styled.div`
margin: auto 10px;
min-width:192px;
position:relative;
cursor:pointer;
`;

export const ImageContainer = styled.img`
margin-left:15px;
-webkit-transform: ${prop => prop.up ? 'scaleY(-1);' : 'scaleY(1);'};
-moz-transform: ${prop => prop.up ? 'scaleY(-1);' : 'scaleY(1);'};
-o-transform: ${prop => prop.up ? 'scaleY(-1);' : 'scaleY(1);'};
transform: ${prop => prop.up ? 'scaleY(-1);' : 'scaleY(1);'};




`;

export const ContentContainer = styled.div`

width:80%;
margin:auto;

`;

export const TextContainer = styled.span`

font-weight: bold;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.25px;
color: #0C0E16;
`;

