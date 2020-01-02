import React from 'react';
import './bills_container.styles.scss';

import UpcomingBills from '../upcoming_bills/upcoming_bills.component';

const BillsContainer = (props) => (

    <div className='bills_container'>
        <UpcomingBills/>
        <UpcomingBills/>
        <UpcomingBills/>
    </div>
); 
  
export default BillsContainer;