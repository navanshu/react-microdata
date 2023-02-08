import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'leiCode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const LeiCode: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'leiCode',
   ...props
  },
  children
 );
};

LeiCode.Text = TextType;

export { LeiCode };
