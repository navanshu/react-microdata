import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'issn',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Issn: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'issn',
   ...props
  },
  children
 );
};

Issn.Text = TextType;

export { Issn };
