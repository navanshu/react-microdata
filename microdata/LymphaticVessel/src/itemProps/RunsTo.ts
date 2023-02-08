import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const VesselType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'runsTo',
   itemScope: true,
   itemType: 'https://schema.org/Vessel',
   ...props
  },
  children
 );
};

const RunsTo: Type & { Vessel: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'runsTo',
   ...props
  },
  children
 );
};

RunsTo.Vessel = VesselType;

export { RunsTo };
