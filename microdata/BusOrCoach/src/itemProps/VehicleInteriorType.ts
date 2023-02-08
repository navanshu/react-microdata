import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'vehicleInteriorType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const VehicleInteriorType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleInteriorType',
   ...props
  },
  children
 );
};

VehicleInteriorType.Text = TextType;

export { VehicleInteriorType };
