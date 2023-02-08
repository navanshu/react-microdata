import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'orderNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const OrderNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'orderNumber',
   ...props
  },
  children
 );
};

OrderNumber.Text = TextType;

export { OrderNumber };
