import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TrainStationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalStation',
   itemScope: true,
   itemType: 'https://schema.org/TrainStation',
   ...props
  },
  children
 );
};

const ArrivalStation: Type & { TrainStation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalStation',
   ...props
  },
  children
 );
};

ArrivalStation.TrainStation = TrainStationType;

export { ArrivalStation };
