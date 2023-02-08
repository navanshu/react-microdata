import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DayOfWeek: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'dayOfWeek',
   itemScope: true,
   itemType: 'https://schema.org/DayOfWeek',
   ...props
  },
  children
 );
};

export { DayOfWeek };
