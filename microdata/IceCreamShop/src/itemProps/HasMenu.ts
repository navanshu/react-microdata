import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HasMenu: Type & {
 URL: Type;
 Menu: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMenu',
   ...props
  },
  children
 );
};

HasMenu.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMenu',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

HasMenu.Menu = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMenu',
   itemScope: true,
   itemType: 'https://schema.org/Menu',
   ...props
  },
  children
 );
};

export { HasMenu };
