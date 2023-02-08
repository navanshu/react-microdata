import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';
type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PriceComponentTypeEnumeration: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemType: 'https://schema.org/PriceComponentTypeEnumeration',
   ...props
  },
  children
 );
};

export { PriceComponentTypeEnumeration };
