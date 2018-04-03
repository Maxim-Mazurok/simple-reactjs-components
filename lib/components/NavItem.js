import React from 'react';
import ListItem from '../elements/ListItem';
import NavLink from '../elements/NavLink';

const NavItem = ({ url, title }) => {
  return (
    <ListItem><NavLink href={url}>{title}</NavLink></ListItem>
  );
};

export default NavItem;
