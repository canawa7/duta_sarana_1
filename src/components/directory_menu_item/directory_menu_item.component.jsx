import React from 'react';

import './directory_menu_item.styles.scss';

const DirectoryMenuItem = (props) => (
    <div className='directory-menu-item'>
        <h1>{props.title}</h1>
        <div className='list-container'>
            <h2>{props.list_title}</h2>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </div>
    </div>
); 


export default DirectoryMenuItem;

