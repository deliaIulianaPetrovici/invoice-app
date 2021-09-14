import React from 'react';
import { StatusDisplayContainer, StatusDisplayOverlay, StatusDisplayText, Dot } from './status-display.styles';

const StatusDisplay = ({ status }) =>
(

    <StatusDisplayContainer status={status} >
        <StatusDisplayOverlay />
        <Dot />
        <StatusDisplayText>{status}</StatusDisplayText>
    </StatusDisplayContainer>

);

export default StatusDisplay;
