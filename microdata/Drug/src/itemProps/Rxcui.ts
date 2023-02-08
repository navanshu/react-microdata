import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'rxcui',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Rxcui: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'rxcui',
   ...props
  },
  children
 );
};

Rxcui.Text = TextType;

export { Rxcui };
