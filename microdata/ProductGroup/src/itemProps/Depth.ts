import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Depth: Type & {
 Distance: Type;
 QuantitativeValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'depth',
   ...props
  },
  children
 );
};

Depth.Distance = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'depth',
   itemScope: true,
   itemType: 'https://schema.org/Distance',
   ...props
  },
  children
 );
};

Depth.QuantitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'depth',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

export { Depth };
