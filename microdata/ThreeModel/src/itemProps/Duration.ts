import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Duration: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'duration',
   itemScope: true,
   itemType: 'https://schema.org/Duration',
   ...props
  },
  children
 );
};

export { Duration };
