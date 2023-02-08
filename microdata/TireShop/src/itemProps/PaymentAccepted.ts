import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'paymentAccepted',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PaymentAccepted: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'paymentAccepted',
   ...props
  },
  children
 );
};

PaymentAccepted.Text = TextType;

export { PaymentAccepted };
