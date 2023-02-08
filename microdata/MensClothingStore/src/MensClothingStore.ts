import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';
type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MensClothingStore: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemType: 'https://schema.org/MensClothingStore',
   ...props
  },
  children
 );
};

export { MensClothingStore };
