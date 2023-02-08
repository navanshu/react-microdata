import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const NegativeNotes: Type & {
 ListItem: Type;
 WebContent: Type;
 ItemList: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'negativeNotes',
   ...props
  },
  children
 );
};

NegativeNotes.ListItem = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'negativeNotes',
   itemScope: true,
   itemType: 'https://schema.org/ListItem',
   ...props
  },
  children
 );
};

NegativeNotes.WebContent = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'negativeNotes',
   itemScope: true,
   itemType: 'https://schema.org/WebContent',
   ...props
  },
  children
 );
};

NegativeNotes.ItemList = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'negativeNotes',
   itemScope: true,
   itemType: 'https://schema.org/ItemList',
   ...props
  },
  children
 );
};

export { NegativeNotes };
