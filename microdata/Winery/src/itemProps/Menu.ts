import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Menu: Type & {
 URL: Type;
 Menu: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'menu',
   ...props
  },
  children
 );
};

Menu.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'menu',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

Menu.Menu = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'menu',
   itemScope: true,
   itemType: 'https://schema.org/Menu',
   ...props
  },
  children
 );
};

export { Menu };
