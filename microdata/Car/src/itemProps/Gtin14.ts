import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'gtin14',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Gtin14: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gtin14',
   ...props
  },
  children
 );
};

Gtin14.Text = TextType;

export { Gtin14 };
