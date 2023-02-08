import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'vehicleIdentificationNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const VehicleIdentificationNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleIdentificationNumber',
   ...props
  },
  children
 );
};

VehicleIdentificationNumber.Text = TextType;

export { VehicleIdentificationNumber };
