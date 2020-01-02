import React from 'react';
import './bank_container.styles.scss';

import BankBalance from '../bank_balance/bank_balance.component';

const BankContainer = (props) => (

    <div className='bank_container'>
        <BankBalance num={1} balance={1000000} onPageBankContainer={props.onPage}/>
        <BankBalance num={2} balance={1000000} onPageBankContainer={props.onPage}/>
        <BankBalance num={3} balance={1000000} onPageBankContainer={props.onPage}/>
        
    </div>
); 
  
export default BankContainer;