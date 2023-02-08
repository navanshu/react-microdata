import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DeliveryMethod: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'deliveryMethod',
   itemScope: true,
   itemType: 'https://schema.org/DeliveryMethod',
   ...props
  },
  children
 );
};

export { DeliveryMethod };
