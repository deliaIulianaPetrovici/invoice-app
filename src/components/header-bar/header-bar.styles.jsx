import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import User from '../../assets/image-avatar.jpg';
import DarkIcon from '../../assets/icon-moon.svg';

const lengtContainer=104;
const lenghtLogo=40;


export const HeaderBarContainer=styled.div`
min-height: 100vh;
width:${lengtContainer}px;
background: #373B53;
border-radius: 0px 20px 20px 0px;
display:flex;
flex-direction:column;
justify-content:space-between;
`;

export const LogoContainer=styled.div`
background: #7C5DFA;
border-radius: 0px 20px 20px 0px;
width:${lengtContainer}px;
height:${lengtContainer}px;
postion:relative;
`;

export const StyleDiv=styled.div`
position:absolute;
top:${lengtContainer/2}px;
background: #9277FF;
border-radius: 20px 0px 20px 0px;
width:${lengtContainer}px;
height:${lengtContainer/2}px;
z-index:1;
`;

export const ImageContainer=styled.div`
position:absolute;
top:${(lengtContainer-lenghtLogo)/2}px;
left:${(lengtContainer-lenghtLogo)/2}px;
background-image: url(${Logo});
width:${lenghtLogo}px;
height:${lenghtLogo}px;
background-repeat:no-repeat;
background-size: contain;
z-index:2;
`;

export const ButtonsContainer=styled.div`
display:flex;
flex-direction:column;
border-radius: 0px 0px 20px 0px;
`;

export const ThemeButtonContainer=styled.div`
background: #373B53;
width:${lengtContainer}px;
height:${lengtContainer}px;
display:flex;
align-items:center;
`;

export const ThemeButton=styled.div`
background-image: url(${DarkIcon});
background-repeat:no-repeat;
background-size: contain;
margin:auto ;
width:20px;
height:20px;
`;

export const UserIconContainer=styled(ThemeButtonContainer)`
border-top: 1px solid #494E6E;
border-radius: 0px 0px 20px 0px;
`;

export const UserIcon=styled(ThemeButton)`
background-image: url(${User});
border-radius:50%;
width:40px;
height:40px;
`;