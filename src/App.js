import React from 'react';
import './App.css';

import InvoicePreview from './components/invoice-preview/invoice-preview.components';

import CustomButton from './components/custom-button/custom-button.component';
import StatusDropDown from './components/status-dropdown/status-dropdown.component';
import HomapageHeader from './components/homepage-header/homepage-header.component';
import InvoiceCollection from './components/invoice-collection/invoice-collection.component';

import HeaderBar from './components/header-bar/header-bar.component';
import Homepage from './pages/homepage/homepage.component';

function App() {
  /*  Testing all the buttons layouts. To be removed.
  
    <CustomButton isWhite>Edit</CustomButton>
        <CustomButton isRed>Delete</CustomButton>
        <CustomButton isDark>Save as Draft</CustomButton>
        <CustomButton >Save &amp; Send</CustomButton>
        <CustomButton>Mark as Paid</CustomButton>
        <CustomButton isNewInvoice>New Invoice</CustomButton>
  */

  return (
    <div className="App">

      <HeaderBar></HeaderBar>
      <div className="pageContainer">
        <Homepage />
      </div>



    </div>
  );
}

export default App;
