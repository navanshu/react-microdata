import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Width: Type & {
 QuantitativeValue: Type;
 Distance: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'width',
   ...props
  },
  children
 );
};

Width.QuantitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'width',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

Width.Distance = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'width',
   itemScope: true,
   itemType: 'https://schema.org/Distance',
   ...props
  },
  children
 );
};

export { Width };
