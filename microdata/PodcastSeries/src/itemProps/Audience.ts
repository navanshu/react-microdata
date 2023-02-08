import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Audience: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'audience',
   itemScope: true,
   itemType: 'https://schema.org/Audience',
   ...props
  },
  children
 );
};

export { Audience };
