import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'priceRange',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PriceRange: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'priceRange',
   ...props
  },
  children
 );
};

PriceRange.Text = TextType;

export { PriceRange };
