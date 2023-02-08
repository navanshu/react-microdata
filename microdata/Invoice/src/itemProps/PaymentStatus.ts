import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PaymentStatus: Type & {
 PaymentStatusType: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'paymentStatus',
   ...props
  },
  children
 );
};

PaymentStatus.PaymentStatusType = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'paymentStatus',
   itemScope: true,
   itemType: 'https://schema.org/PaymentStatusType',
   ...props
  },
  children
 );
};

export { PaymentStatus };
