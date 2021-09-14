import styled, { css } from 'styled-components';


const pendingStatusDisplay = css`
color:#FF8F00;
background-color:#FF8F00;

`;

const paidStatusDisplay = css`
color:#33D69F;
background-color:#33D69F;

`;

const draftStatusDisplay = css`
color:#373B53;
background-color:#373B53;

`;



const getStatusDisplayStyles = props => {
  if (props.status === 'pending') {
    return pendingStatusDisplay;
  }
  if (props.status === 'paid') {
    return paidStatusDisplay;
  }
  if (props.status === 'draft') {
    return draftStatusDisplay;
  }

}

export const StatusDisplayContainer = styled.div`

${getStatusDisplayStyles};


border-radius:6px;
mix-blend-mode:normal;
display:flex;
align-items:center;
justify-content:center;
height:40px;
width:104px;
position:relative;

`;
export const StatusDisplayOverlay = styled.div`
height:40px;
width:104px;
z-index:2;
background: rgba(255, 255, 255, 0.9);

`;

export const StatusDisplayText = styled.span`
font-weight: bold;
font-size: 12px;
line-height: 15px;
color:inherit;
left :30px;
margin:auto;
z-index:3;
position:absolute;
text-transform:capitalize;
`;



export const Dot = styled.span`

height:8px;
width:8px;
border-radius:50%;
left:12px;
background-color:inherit;
z-index:3;
position:absolute;
`;