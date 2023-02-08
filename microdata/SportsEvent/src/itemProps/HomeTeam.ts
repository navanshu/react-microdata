import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HomeTeam: Type & {
 Person: Type;
 SportsTeam: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'homeTeam',
   ...props
  },
  children
 );
};

HomeTeam.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'homeTeam',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

HomeTeam.SportsTeam = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'homeTeam',
   itemScope: true,
   itemType: 'https://schema.org/SportsTeam',
   ...props
  },
  children
 );
};

export { HomeTeam };
