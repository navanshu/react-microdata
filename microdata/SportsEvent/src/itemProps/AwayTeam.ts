import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AwayTeam: Type & {
 SportsTeam: Type;
 Person: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'awayTeam',
   ...props
  },
  children
 );
};

AwayTeam.SportsTeam = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'awayTeam',
   itemScope: true,
   itemType: 'https://schema.org/SportsTeam',
   ...props
  },
  children
 );
};

AwayTeam.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'awayTeam',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

export { AwayTeam };
