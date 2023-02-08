import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const QuantitativeValueType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'trailerWeight',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

const TrailerWeight: Type & { QuantitativeValue: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'trailerWeight',
   ...props
  },
  children
 );
};

TrailerWeight.QuantitativeValue = QuantitativeValueType;

export { TrailerWeight };
