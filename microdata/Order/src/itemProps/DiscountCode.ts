import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'discountCode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const DiscountCode: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'discountCode',
   ...props
  },
  children
 );
};

DiscountCode.Text = TextType;

export { DiscountCode };
