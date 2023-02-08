import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Aircraft: Type & {
 Vehicle: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'aircraft',
   ...props
  },
  children
 );
};

Aircraft.Vehicle = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'aircraft',
   itemScope: true,
   itemType: 'https://schema.org/Vehicle',
   ...props
  },
  children
 );
};

export { Aircraft };
