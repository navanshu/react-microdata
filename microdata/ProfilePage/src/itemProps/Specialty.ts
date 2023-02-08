import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Specialty: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'specialty',
   itemScope: true,
   itemType: 'https://schema.org/Specialty',
   ...props
  },
  children
 );
};

export { Specialty };
