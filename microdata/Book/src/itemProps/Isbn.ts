import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'isbn',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Isbn: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isbn',
   ...props
  },
  children
 );
};

Isbn.Text = TextType;

export { Isbn };
