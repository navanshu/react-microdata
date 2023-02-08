import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'gtin12',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Gtin12: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gtin12',
   ...props
  },
  children
 );
};

Gtin12.Text = TextType;

export { Gtin12 };
