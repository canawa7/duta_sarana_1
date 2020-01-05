import React from 'react';

import './directory_menu_item.styles.scss';

import ListTable from '../list_table/list_table.component';

const DirectoryMenuItem = (props) => (
    <div className='directory-menu-item'>
        <h1>{props.title}</h1>
        <div className='list-container'>
            <h2>{props.list_title}</h2>
            
        </div>
    </div>
); 


export default DirectoryMenuItem;

