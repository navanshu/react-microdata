import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const VehicleTransmission: Type & {
 QualitativeValue: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleTransmission',
   ...props
  },
  children
 );
};

VehicleTransmission.QualitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleTransmission',
   itemScope: true,
   itemType: 'https://schema.org/QualitativeValue',
   ...props
  },
  children
 );
};

VehicleTransmission.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleTransmission',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { VehicleTransmission };
