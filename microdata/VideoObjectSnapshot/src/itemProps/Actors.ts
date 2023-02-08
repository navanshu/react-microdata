import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PersonType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'actors',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

const Actors: Type & { Person: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'actors',
   ...props
  },
  children
 );
};

Actors.Person = PersonType;

export { Actors };
