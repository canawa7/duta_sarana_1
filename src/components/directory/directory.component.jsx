import React from 'react';

import './directory.styles.scss';

import DirectoryMenuItem from '../directory_menu_item/directory_menu_item.component';

const Directory = (props) => (
    <div className='directory'>
        <DirectoryMenuItem title="Projects"/>
        <DirectoryMenuItem title="Invoice"/>
        <DirectoryMenuItem title="Clients"/>
    </div>
    
); 


export default Directory;

