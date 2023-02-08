import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'aspect',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Aspect: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'aspect',
   ...props
  },
  children
 );
};

Aspect.Text = TextType;

export { Aspect };
