import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'color',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Color: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'color',
   ...props
  },
  children
 );
};

Color.Text = TextType;

export { Color };
