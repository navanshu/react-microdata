import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TimeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'closes',
   itemScope: true,
   itemType: 'https://schema.org/Time',
   ...props
  },
  children
 );
};

const Closes: Type & { Time: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'closes',
   ...props
  },
  children
 );
};

Closes.Time = TimeType;

export { Closes };
