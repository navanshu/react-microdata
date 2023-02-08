import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PriceType: Type & {
 PriceTypeEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'priceType',
   ...props
  },
  children
 );
};

PriceType.PriceTypeEnumeration = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'priceType',
   itemScope: true,
   itemType: 'https://schema.org/PriceTypeEnumeration',
   ...props
  },
  children
 );
};

export { PriceType };
