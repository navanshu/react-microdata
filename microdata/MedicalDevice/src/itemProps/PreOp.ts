import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'preOp',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PreOp: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'preOp',
   ...props
  },
  children
 );
};

PreOp.Text = TextType;

export { PreOp };
