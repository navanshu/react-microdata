import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AirportType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalAirport',
   itemScope: true,
   itemType: 'https://schema.org/Airport',
   ...props
  },
  children
 );
};

const ArrivalAirport: Type & { Airport: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalAirport',
   ...props
  },
  children
 );
};

ArrivalAirport.Airport = AirportType;

export { ArrivalAirport };
