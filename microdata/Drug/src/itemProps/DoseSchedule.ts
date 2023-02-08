import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DoseSchedule: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'doseSchedule',
   itemScope: true,
   itemType: 'https://schema.org/DoseSchedule',
   ...props
  },
  children
 );
};

export { DoseSchedule };
