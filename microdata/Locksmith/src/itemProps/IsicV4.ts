import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'isicV4',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const IsicV4: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isicV4',
   ...props
  },
  children
 );
};

IsicV4.Text = TextType;

export { IsicV4 };
