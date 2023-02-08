import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'awards',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Awards: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'awards',
   ...props
  },
  children
 );
};

Awards.Text = TextType;

export { Awards };
