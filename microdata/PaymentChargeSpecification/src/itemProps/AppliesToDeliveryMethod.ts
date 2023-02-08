import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DeliveryMethodType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'appliesToDeliveryMethod',
   itemScope: true,
   itemType: 'https://schema.org/DeliveryMethod',
   ...props
  },
  children
 );
};

const AppliesToDeliveryMethod: Type & { DeliveryMethod: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'appliesToDeliveryMethod',
   ...props
  },
  children
 );
};

AppliesToDeliveryMethod.DeliveryMethod = DeliveryMethodType;

export { AppliesToDeliveryMethod };
