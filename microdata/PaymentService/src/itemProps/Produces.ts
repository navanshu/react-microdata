import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ThingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'produces',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

const Produces: Type & { Thing: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'produces',
   ...props
  },
  children
 );
};

Produces.Thing = ThingType;

export { Produces };
