import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'circle',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Circle: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'circle',
   ...props
  },
  children
 );
};

Circle.Text = TextType;

export { Circle };
