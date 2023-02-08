import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Competitor: Type & {
 Person: Type;
 SportsTeam: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'competitor',
   ...props
  },
  children
 );
};

Competitor.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'competitor',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

Competitor.SportsTeam = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'competitor',
   itemScope: true,
   itemType: 'https://schema.org/SportsTeam',
   ...props
  },
  children
 );
};

export { Competitor };
