import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RequiredQuantity: Type & {
 QuantitativeValue: Type;
 Number: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'requiredQuantity',
   ...props
  },
  children
 );
};

RequiredQuantity.QuantitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'requiredQuantity',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

RequiredQuantity.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'requiredQuantity',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

export { RequiredQuantity };
