import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'vehicleConfiguration',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const VehicleConfiguration: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleConfiguration',
   ...props
  },
  children
 );
};

VehicleConfiguration.Text = TextType;

export { VehicleConfiguration };
