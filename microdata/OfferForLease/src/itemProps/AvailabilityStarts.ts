import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AvailabilityStarts: Type & {
 Time: Type;
 DateTime: Type;
 Date: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availabilityStarts',
   ...props
  },
  children
 );
};

AvailabilityStarts.Time = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availabilityStarts',
   itemScope: true,
   itemType: 'https://schema.org/Time',
   ...props
  },
  children
 );
};

AvailabilityStarts.DateTime = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availabilityStarts',
   itemScope: true,
   itemType: 'https://schema.org/DateTime',
   ...props
  },
  children
 );
};

AvailabilityStarts.Date = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availabilityStarts',
   itemScope: true,
   itemType: 'https://schema.org/Date',
   ...props
  },
  children
 );
};

export { AvailabilityStarts };
