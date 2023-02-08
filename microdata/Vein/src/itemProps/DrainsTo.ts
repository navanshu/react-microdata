import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const VesselType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'drainsTo',
   itemScope: true,
   itemType: 'https://schema.org/Vessel',
   ...props
  },
  children
 );
};

const DrainsTo: Type & { Vessel: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'drainsTo',
   ...props
  },
  children
 );
};

DrainsTo.Vessel = VesselType;

export { DrainsTo };
