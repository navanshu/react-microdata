import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const VesselType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'originatesFrom',
   itemScope: true,
   itemType: 'https://schema.org/Vessel',
   ...props
  },
  children
 );
};

const OriginatesFrom: Type & { Vessel: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'originatesFrom',
   ...props
  },
  children
 );
};

OriginatesFrom.Vessel = VesselType;

export { OriginatesFrom };
