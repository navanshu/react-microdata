import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';
type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PreventionIndication: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemType: 'https://schema.org/PreventionIndication',
   ...props
  },
  children
 );
};

export { PreventionIndication };
