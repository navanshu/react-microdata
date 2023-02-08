import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EstimatedFlightDuration: Type & {
 Duration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'estimatedFlightDuration',
   ...props
  },
  children
 );
};

EstimatedFlightDuration.Duration = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'estimatedFlightDuration',
   itemScope: true,
   itemType: 'https://schema.org/Duration',
   ...props
  },
  children
 );
};

export { EstimatedFlightDuration };
