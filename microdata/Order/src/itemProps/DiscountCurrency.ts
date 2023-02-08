import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'discountCurrency',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const DiscountCurrency: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'discountCurrency',
   ...props
  },
  children
 );
};

DiscountCurrency.Text = TextType;

export { DiscountCurrency };
