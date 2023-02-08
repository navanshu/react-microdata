import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Distance: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'distance',
   itemScope: true,
   itemType: 'https://schema.org/Distance',
   ...props
  },
  children
 );
};

export { Distance };
