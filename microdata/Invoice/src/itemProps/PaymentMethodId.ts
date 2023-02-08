import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'paymentMethodId',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PaymentMethodId: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'paymentMethodId',
   ...props
  },
  children
 );
};

PaymentMethodId.Text = TextType;

export { PaymentMethodId };
