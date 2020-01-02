import React from 'react';
import './bank_balance.styles.scss';
import { withRouter } from 'react-router-dom';

import UpcomingBills from '../upcoming_bills/upcoming_bills.component';

const BankBalance = (props) => {

    if(props.onPageBankContainer === 'homepage'){
        return(
            <div className='bank_balance'>
                <h1>Bank Balance {props.num}</h1>
                <p>Your balance is: $ {props.balance}</p>
                <UpcomingBills/>
            </div>
        );
    } else {
        return(
            <div className='bank_balance'>
                <h1>Bank Balance {props.num}</h1>
                <p>Your balance is: $ {props.balance}</p>
            </div>
        ); 

    }
    
}
  
export default withRouter(BankBalance);