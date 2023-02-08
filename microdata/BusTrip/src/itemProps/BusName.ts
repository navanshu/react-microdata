import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'busName',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const BusName: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'busName',
   ...props
  },
  children
 );
};

BusName.Text = TextType;

export { BusName };
