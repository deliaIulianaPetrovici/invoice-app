import styled from 'styled-components';
import arrowLeft from '../../assets/icon-arrow-right.svg';

export const InvoicePreviewContainer=styled.div`
display:flex;
flex-direction:row;
background-color:white;
border-radius:8px;
box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);

padding:10px 25px;
align-items:center;
margin-bottom:15px;
`;
export const StatusContainer=styled.div`
color: #7E88C3;

display:flex;
flex-direction:row;
align-items:center;
`;

export const ItemContainer=styled(StatusContainer)`
flex:1;
`;


export const InvoiceNumber=styled.div`
font-weight: bold;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.25px;
color: #0C0E16;
`;

export const InvoiceAmount=styled.div`
font-weight: bold;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.8px;
color: #0C0E16;
`;

export const InvoiceInfo=styled.div`
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #858BB2;
padding: 0 5px;
letter-spacing: -0.25px;
`;

export const InvoiceArrow=styled.div`
background-image: url(${arrowLeft});
background-repeat: no-repeat;
background-size:contain;
width:10px;
height:8px;
margin-left:20px;
`;