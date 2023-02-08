import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MenuItemType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMenuItem',
   itemScope: true,
   itemType: 'https://schema.org/MenuItem',
   ...props
  },
  children
 );
};

const HasMenuItem: Type & { MenuItem: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasMenuItem',
   ...props
  },
  children
 );
};

HasMenuItem.MenuItem = MenuItemType;

export { HasMenuItem };
