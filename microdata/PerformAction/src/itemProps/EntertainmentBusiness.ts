import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EntertainmentBusiness: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'entertainmentBusiness',
   itemScope: true,
   itemType: 'https://schema.org/EntertainmentBusiness',
   ...props
  },
  children
 );
};

export { EntertainmentBusiness };
