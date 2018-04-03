import React from 'react';
import NavItem from './NavItem';
import WebsiteTitle from '../elements/WebsiteTitle';
import Nav from '../elements/Nav';

const Navigation = ({ title, items }) => {
  return (
    <Nav>
      <WebsiteTitle>{title}</WebsiteTitle>
      <ul>
        {items.map(item => <NavItem url={item.url} title={item.title}/>)}
      </ul>
    </Nav>
  );
};

export default Navigation;
