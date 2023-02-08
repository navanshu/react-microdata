import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DefinedRegionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'shippingDestination',
   itemScope: true,
   itemType: 'https://schema.org/DefinedRegion',
   ...props
  },
  children
 );
};

const ShippingDestination: Type & { DefinedRegion: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'shippingDestination',
   ...props
  },
  children
 );
};

ShippingDestination.DefinedRegion = DefinedRegionType;

export { ShippingDestination };
