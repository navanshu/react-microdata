import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const VesselType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'bloodSupply',
   itemScope: true,
   itemType: 'https://schema.org/Vessel',
   ...props
  },
  children
 );
};

const BloodSupply: Type & { Vessel: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'bloodSupply',
   ...props
  },
  children
 );
};

BloodSupply.Vessel = VesselType;

export { BloodSupply };
