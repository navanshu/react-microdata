import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AcceptsReservations: Type & {
 Boolean: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'acceptsReservations',
   ...props
  },
  children
 );
};

AcceptsReservations.Boolean = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'acceptsReservations',
   itemScope: true,
   itemType: 'https://schema.org/Boolean',
   ...props
  },
  children
 );
};

AcceptsReservations.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'acceptsReservations',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { AcceptsReservations };
