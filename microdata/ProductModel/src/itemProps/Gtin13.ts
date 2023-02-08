import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'gtin13',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Gtin13: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gtin13',
   ...props
  },
  children
 );
};

Gtin13.Text = TextType;

export { Gtin13 };
