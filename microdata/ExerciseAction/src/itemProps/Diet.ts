import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Diet: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'diet',
   itemScope: true,
   itemType: 'https://schema.org/Diet',
   ...props
  },
  children
 );
};

export { Diet };
