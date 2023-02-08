import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const QuantitativeValueType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'fuelConsumption',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

const FuelConsumption: Type & { QuantitativeValue: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'fuelConsumption',
   ...props
  },
  children
 );
};

FuelConsumption.QuantitativeValue = QuantitativeValueType;

export { FuelConsumption };
