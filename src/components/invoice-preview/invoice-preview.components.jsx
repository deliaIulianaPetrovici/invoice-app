import React from 'react';
import {
    InvoicePreviewContainer,
    ItemContainer,
    InvoiceNumber,
    InvoiceAmount,
    InvoiceInfo,
    InvoiceArrow,
    StatusContainer
} from './invoice-preview.styless';

import StatusDisplay from '../status-display/status-display.component';


const InvoicePreview = ({ id, paymentDue,
    clientName, total, status }) => (
    <InvoicePreviewContainer>
        <ItemContainer>
            <p>#</p>
            <InvoiceNumber>{id}</InvoiceNumber>
        </ItemContainer>
        <ItemContainer>
            <InvoiceInfo>Due </InvoiceInfo>
            <p> {paymentDue}</p>
        </ItemContainer>
        <ItemContainer>
            <InvoiceInfo>{clientName}</InvoiceInfo>
        </ItemContainer>

        <ItemContainer>
            <InvoiceAmount>$ {total}</InvoiceAmount>
        </ItemContainer>

        <StatusContainer>
            <StatusDisplay status={status}></StatusDisplay>
            <InvoiceArrow />
        </StatusContainer>



    </InvoicePreviewContainer>
)

export default InvoicePreview;