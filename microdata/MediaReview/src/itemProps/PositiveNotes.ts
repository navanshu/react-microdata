import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PositiveNotes: Type & {
 WebContent: Type;
 ListItem: Type;
 ItemList: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'positiveNotes',
   ...props
  },
  children
 );
};

PositiveNotes.WebContent = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'positiveNotes',
   itemScope: true,
   itemType: 'https://schema.org/WebContent',
   ...props
  },
  children
 );
};

PositiveNotes.ListItem = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'positiveNotes',
   itemScope: true,
   itemType: 'https://schema.org/ListItem',
   ...props
  },
  children
 );
};

PositiveNotes.ItemList = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'positiveNotes',
   itemScope: true,
   itemType: 'https://schema.org/ItemList',
   ...props
  },
  children
 );
};

export { PositiveNotes };
