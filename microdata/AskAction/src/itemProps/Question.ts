import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Question: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'question',
   itemScope: true,
   itemType: 'https://schema.org/Question',
   ...props
  },
  children
 );
};

export { Question };
