import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Drug: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'drug',
   itemScope: true,
   itemType: 'https://schema.org/Drug',
   ...props
  },
  children
 );
};

export { Drug };
