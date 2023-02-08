import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PersonType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'readBy',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

const ReadBy: Type & { Person: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'readBy',
   ...props
  },
  children
 );
};

ReadBy.Person = PersonType;

export { ReadBy };
