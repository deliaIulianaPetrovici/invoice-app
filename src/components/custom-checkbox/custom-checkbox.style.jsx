import styled from 'styled-components';

import iconCheck from '../../assets/icon-check.svg';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const CheckboxIcon=styled.div`
background-image: url(${iconCheck});
background-repeat: no-repeat;
background-size:contain;
width: 12px;
height: 9px;
margin:auto;
margin-top:2px;

`;


export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? '#7C5DFA' : '#DFE3FA'};
  border-radius: 3px;
  transition: all 150ms;
  

  ${CheckboxIcon}{
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
  ${HiddenCheckbox}:hover + & {
    border: 1px solid #7C5DFA;
  }
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: center;

`


