import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Sponsor: Type & {
 Organization: Type;
 Person: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sponsor',
   ...props
  },
  children
 );
};

Sponsor.Organization = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sponsor',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

Sponsor.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sponsor',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

export { Sponsor };
