import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'mpn',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Mpn: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'mpn',
   ...props
  },
  children
 );
};

Mpn.Text = TextType;

export { Mpn };
