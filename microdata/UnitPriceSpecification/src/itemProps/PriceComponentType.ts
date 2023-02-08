import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PriceComponentTypeEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'priceComponentType',
   itemScope: true,
   itemType: 'https://schema.org/PriceComponentTypeEnumeration',
   ...props
  },
  children
 );
};

const PriceComponentType: Type & { PriceComponentTypeEnumeration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'priceComponentType',
   ...props
  },
  children
 );
};

PriceComponentType.PriceComponentTypeEnumeration =
 PriceComponentTypeEnumerationType;

export { PriceComponentType };
