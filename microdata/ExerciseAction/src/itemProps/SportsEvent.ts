import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SportsEvent: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sportsEvent',
   itemScope: true,
   itemType: 'https://schema.org/SportsEvent',
   ...props
  },
  children
 );
};

export { SportsEvent };
