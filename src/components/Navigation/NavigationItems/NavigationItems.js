import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <div>
        <NavigationItem link="/" exact>
            Home
        </NavigationItem>
    </div>
);

export default navigationItems;
