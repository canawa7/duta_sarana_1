import React from 'react';

import './invoicepage.styles.scss';

import BankContainer from '../../components/bank_container/bank_container.component';
import ListTable from '../../components/list_table/list_table.component';

const InvoicePage = (props) => {
    return(
        <div className='invoicepage'>
            <BankContainer/>
            <ListTable/>
        </div>
    );
}
export default InvoicePage;