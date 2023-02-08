import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'nsn',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Nsn: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'nsn',
   ...props
  },
  children
 );
};

Nsn.Text = TextType;

export { Nsn };
