import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DeliveryMethodType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasDeliveryMethod',
   itemScope: true,
   itemType: 'https://schema.org/DeliveryMethod',
   ...props
  },
  children
 );
};

const HasDeliveryMethod: Type & { DeliveryMethod: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasDeliveryMethod',
   ...props
  },
  children
 );
};

HasDeliveryMethod.DeliveryMethod = DeliveryMethodType;

export { HasDeliveryMethod };
