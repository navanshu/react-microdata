import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ThingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'object',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

const Object: Type & { Thing: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'object',
   ...props
  },
  children
 );
};

Object.Thing = ThingType;

export { Object };
