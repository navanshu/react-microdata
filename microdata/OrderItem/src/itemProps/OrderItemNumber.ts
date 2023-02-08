import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'orderItemNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const OrderItemNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'orderItemNumber',
   ...props
  },
  children
 );
};

OrderItemNumber.Text = TextType;

export { OrderItemNumber };
