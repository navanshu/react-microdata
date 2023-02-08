import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MenuAddOn: Type & {
 MenuItem: Type;
 MenuSection: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'menuAddOn',
   ...props
  },
  children
 );
};

MenuAddOn.MenuItem = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'menuAddOn',
   itemScope: true,
   itemType: 'https://schema.org/MenuItem',
   ...props
  },
  children
 );
};

MenuAddOn.MenuSection = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'menuAddOn',
   itemScope: true,
   itemType: 'https://schema.org/MenuSection',
   ...props
  },
  children
 );
};

export { MenuAddOn };
