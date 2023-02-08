import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SportsActivityLocation: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sportsActivityLocation',
   itemScope: true,
   itemType: 'https://schema.org/SportsActivityLocation',
   ...props
  },
  children
 );
};

export { SportsActivityLocation };
