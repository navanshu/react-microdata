import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'gtin8',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Gtin8: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gtin8',
   ...props
  },
  children
 );
};

Gtin8.Text = TextType;

export { Gtin8 };
