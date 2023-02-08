import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AirportType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'departureAirport',
   itemScope: true,
   itemType: 'https://schema.org/Airport',
   ...props
  },
  children
 );
};

const DepartureAirport: Type & { Airport: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'departureAirport',
   ...props
  },
  children
 );
};

DepartureAirport.Airport = AirportType;

export { DepartureAirport };
