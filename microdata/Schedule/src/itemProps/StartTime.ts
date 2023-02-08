import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const StartTime: Type & {
 DateTime: Type;
 Time: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'startTime',
   ...props
  },
  children
 );
};

StartTime.DateTime = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'startTime',
   itemScope: true,
   itemType: 'https://schema.org/DateTime',
   ...props
  },
  children
 );
};

StartTime.Time = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'startTime',
   itemScope: true,
   itemType: 'https://schema.org/Time',
   ...props
  },
  children
 );
};

export { StartTime };
