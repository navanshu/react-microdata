import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TripType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'partOfTrip',
   itemScope: true,
   itemType: 'https://schema.org/Trip',
   ...props
  },
  children
 );
};

const PartOfTrip: Type & { Trip: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'partOfTrip',
   ...props
  },
  children
 );
};

PartOfTrip.Trip = TripType;

export { PartOfTrip };
