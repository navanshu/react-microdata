import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SportsTeam: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sportsTeam',
   itemScope: true,
   itemType: 'https://schema.org/SportsTeam',
   ...props
  },
  children
 );
};

export { SportsTeam };
