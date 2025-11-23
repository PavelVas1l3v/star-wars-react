import React from 'react';


const NavItem = ({changePage,itemTitle}) => {
    return (
        <li
            onClick={() => {changePage(itemTitle)}}
            className="nav-item btn btn-danger mx-1 border-warning">
            {itemTitle}
        </li>
    );
};

export default NavItem;