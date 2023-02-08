import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const VehicleSpecialUsage: Type & {
 CarUsageType: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleSpecialUsage',
   ...props
  },
  children
 );
};

VehicleSpecialUsage.CarUsageType = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleSpecialUsage',
   itemScope: true,
   itemType: 'https://schema.org/CarUsageType',
   ...props
  },
  children
 );
};

export { VehicleSpecialUsage };
