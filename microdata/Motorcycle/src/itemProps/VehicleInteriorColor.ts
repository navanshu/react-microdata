import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'vehicleInteriorColor',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const VehicleInteriorColor: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleInteriorColor',
   ...props
  },
  children
 );
};

VehicleInteriorColor.Text = TextType;

export { VehicleInteriorColor };
