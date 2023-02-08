import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Dataset: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'dataset',
   itemScope: true,
   itemType: 'https://schema.org/Dataset',
   ...props
  },
  children
 );
};

export { Dataset };
