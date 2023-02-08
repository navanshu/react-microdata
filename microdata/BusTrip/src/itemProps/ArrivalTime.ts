import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ArrivalTime: Type & {
 Time: Type;
 DateTime: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalTime',
   ...props
  },
  children
 );
};

ArrivalTime.Time = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalTime',
   itemScope: true,
   itemType: 'https://schema.org/Time',
   ...props
  },
  children
 );
};

ArrivalTime.DateTime = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalTime',
   itemScope: true,
   itemType: 'https://schema.org/DateTime',
   ...props
  },
  children
 );
};

export { ArrivalTime };
