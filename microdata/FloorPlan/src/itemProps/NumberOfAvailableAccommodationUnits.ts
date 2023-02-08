import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const QuantitativeValueType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'numberOfAvailableAccommodationUnits',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

const NumberOfAvailableAccommodationUnits: Type & {
 QuantitativeValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'numberOfAvailableAccommodationUnits',
   ...props
  },
  children
 );
};

NumberOfAvailableAccommodationUnits.QuantitativeValue = QuantitativeValueType;

export { NumberOfAvailableAccommodationUnits };
