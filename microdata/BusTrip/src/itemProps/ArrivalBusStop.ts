import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ArrivalBusStop: Type & {
 BusStation: Type;
 BusStop: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalBusStop',
   ...props
  },
  children
 );
};

ArrivalBusStop.BusStation = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalBusStop',
   itemScope: true,
   itemType: 'https://schema.org/BusStation',
   ...props
  },
  children
 );
};

ArrivalBusStop.BusStop = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalBusStop',
   itemScope: true,
   itemType: 'https://schema.org/BusStop',
   ...props
  },
  children
 );
};

export { ArrivalBusStop };
