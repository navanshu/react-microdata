import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'runtime',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Runtime: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'runtime',
   ...props
  },
  children
 );
};

Runtime.Text = TextType;

export { Runtime };
