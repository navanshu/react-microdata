import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ItemListElement: Type & {
 Thing: Type;
 ListItem: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemListElement',
   ...props
  },
  children
 );
};

ItemListElement.Thing = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemListElement',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

ItemListElement.ListItem = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemListElement',
   itemScope: true,
   itemType: 'https://schema.org/ListItem',
   ...props
  },
  children
 );
};

export { ItemListElement };
