import React from 'react';

import './homepage.styles.scss';

import BankContainer from '../../components/bank_container/bank_container.component';
import Directory from '../../components/directory/directory.component';


const HomePage = (props) => (
    <div className='homepage'>
        <BankContainer onPage='homepage'/>
        <Directory/>
    </div>
);

export default HomePage;