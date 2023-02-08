import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DeliveryMethodType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableDeliveryMethod',
   itemScope: true,
   itemType: 'https://schema.org/DeliveryMethod',
   ...props
  },
  children
 );
};

const AvailableDeliveryMethod: Type & { DeliveryMethod: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'availableDeliveryMethod',
   ...props
  },
  children
 );
};

AvailableDeliveryMethod.DeliveryMethod = DeliveryMethodType;

export { AvailableDeliveryMethod };
