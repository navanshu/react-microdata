import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'gtin',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Gtin: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gtin',
   ...props
  },
  children
 );
};

Gtin.Text = TextType;

export { Gtin };
