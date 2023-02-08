import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AcceptedPaymentMethod: Type & {
 LoanOrCredit: Type;
 PaymentMethod: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'acceptedPaymentMethod',
   ...props
  },
  children
 );
};

AcceptedPaymentMethod.LoanOrCredit = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'acceptedPaymentMethod',
   itemScope: true,
   itemType: 'https://schema.org/LoanOrCredit',
   ...props
  },
  children
 );
};

AcceptedPaymentMethod.PaymentMethod = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'acceptedPaymentMethod',
   itemScope: true,
   itemType: 'https://schema.org/PaymentMethod',
   ...props
  },
  children
 );
};

export { AcceptedPaymentMethod };
