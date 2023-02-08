import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const FlightDistance: Type & {
 Distance: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'flightDistance',
   ...props
  },
  children
 );
};

FlightDistance.Distance = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'flightDistance',
   itemScope: true,
   itemType: 'https://schema.org/Distance',
   ...props
  },
  children
 );
};

export { FlightDistance };
