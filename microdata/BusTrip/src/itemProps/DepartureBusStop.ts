import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DepartureBusStop: Type & {
 BusStop: Type;
 BusStation: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'departureBusStop',
   ...props
  },
  children
 );
};

DepartureBusStop.BusStop = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'departureBusStop',
   itemScope: true,
   itemType: 'https://schema.org/BusStop',
   ...props
  },
  children
 );
};

DepartureBusStop.BusStation = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'departureBusStop',
   itemScope: true,
   itemType: 'https://schema.org/BusStation',
   ...props
  },
  children
 );
};

export { DepartureBusStop };
