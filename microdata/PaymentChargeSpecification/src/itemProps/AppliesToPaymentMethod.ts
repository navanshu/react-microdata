import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PaymentMethodType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'appliesToPaymentMethod',
   itemScope: true,
   itemType: 'https://schema.org/PaymentMethod',
   ...props
  },
  children
 );
};

const AppliesToPaymentMethod: Type & { PaymentMethod: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'appliesToPaymentMethod',
   ...props
  },
  children
 );
};

AppliesToPaymentMethod.PaymentMethod = PaymentMethodType;

export { AppliesToPaymentMethod };
