import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'polygon',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Polygon: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'polygon',
   ...props
  },
  children
 );
};

Polygon.Text = TextType;

export { Polygon };
