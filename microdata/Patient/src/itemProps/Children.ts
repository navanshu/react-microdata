import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PersonType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'children',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

const Children: Type & { Person: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'children',
   ...props
  },
  children
 );
};

Children.Person = PersonType;

export { Children };
