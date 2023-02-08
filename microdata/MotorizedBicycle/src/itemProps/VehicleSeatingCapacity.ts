import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const VehicleSeatingCapacity: Type & {
 QuantitativeValue: Type;
 Number: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleSeatingCapacity',
   ...props
  },
  children
 );
};

VehicleSeatingCapacity.QuantitativeValue = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleSeatingCapacity',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

VehicleSeatingCapacity.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleSeatingCapacity',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

export { VehicleSeatingCapacity };
