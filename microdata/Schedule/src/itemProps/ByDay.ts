import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ByDay: Type & {
 DayOfWeek: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'byDay',
   ...props
  },
  children
 );
};

ByDay.DayOfWeek = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'byDay',
   itemScope: true,
   itemType: 'https://schema.org/DayOfWeek',
   ...props
  },
  children
 );
};

export { ByDay };
