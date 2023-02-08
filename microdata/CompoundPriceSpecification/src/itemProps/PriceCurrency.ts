import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'priceCurrency',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PriceCurrency: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'priceCurrency',
   ...props
  },
  children
 );
};

PriceCurrency.Text = TextType;

export { PriceCurrency };
