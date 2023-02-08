import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const WarrantyScope: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'warrantyScope',
   itemScope: true,
   itemType: 'https://schema.org/WarrantyScope',
   ...props
  },
  children
 );
};

export { WarrantyScope };
