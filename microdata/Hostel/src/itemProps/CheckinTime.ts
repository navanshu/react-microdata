import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CheckinTime: Type & {
 DateTime: Type;
 Time: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'checkinTime',
   ...props
  },
  children
 );
};

CheckinTime.DateTime = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'checkinTime',
   itemScope: true,
   itemType: 'https://schema.org/DateTime',
   ...props
  },
  children
 );
};

CheckinTime.Time = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'checkinTime',
   itemScope: true,
   itemType: 'https://schema.org/Time',
   ...props
  },
  children
 );
};

export { CheckinTime };
