import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TripType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'subTrip',
   itemScope: true,
   itemType: 'https://schema.org/Trip',
   ...props
  },
  children
 );
};

const SubTrip: Type & { Trip: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'subTrip',
   ...props
  },
  children
 );
};

SubTrip.Trip = TripType;

export { SubTrip };
