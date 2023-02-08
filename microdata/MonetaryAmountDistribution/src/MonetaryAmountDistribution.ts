import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';
type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MonetaryAmountDistribution: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmountDistribution',
   ...props
  },
  children
 );
};

export { MonetaryAmountDistribution };
