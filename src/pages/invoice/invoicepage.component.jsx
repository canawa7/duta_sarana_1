import React from 'react';

import './invoicepage.styles.scss';

import BankContainer from '../../components/bank_container/bank_container.component';
import InvoiceList from '../../components/invoice_list/invoice_list.component';

const InvoicePage = (props) => {
    return(
        <div className='invoicepage'>
            <BankContainer/>
            <InvoiceList/>
        </div>
    );
}
export default InvoicePage;