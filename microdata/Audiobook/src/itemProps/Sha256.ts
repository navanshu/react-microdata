import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'sha256',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Sha256: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sha256',
   ...props
  },
  children
 );
};

Sha256.Text = TextType;

export { Sha256 };
