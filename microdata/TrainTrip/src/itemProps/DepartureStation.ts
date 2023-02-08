import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TrainStationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'departureStation',
   itemScope: true,
   itemType: 'https://schema.org/TrainStation',
   ...props
  },
  children
 );
};

const DepartureStation: Type & { TrainStation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'departureStation',
   ...props
  },
  children
 );
};

DepartureStation.TrainStation = TrainStationType;

export { DepartureStation };
