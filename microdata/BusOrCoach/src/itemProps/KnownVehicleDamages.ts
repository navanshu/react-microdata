import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'knownVehicleDamages',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const KnownVehicleDamages: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'knownVehicleDamages',
   ...props
  },
  children
 );
};

KnownVehicleDamages.Text = TextType;

export { KnownVehicleDamages };
