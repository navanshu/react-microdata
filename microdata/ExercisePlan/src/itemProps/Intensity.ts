import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Intensity: Type & {
 QuantitativeValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'intensity',
   ...props
  },
  children
 );
};

Intensity.QuantitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'intensity',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

export { Intensity };
