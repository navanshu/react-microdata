import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'slogan',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Slogan: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'slogan',
   ...props
  },
  children
 );
};

Slogan.Text = TextType;

export { Slogan };
