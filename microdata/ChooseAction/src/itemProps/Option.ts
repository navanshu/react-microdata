import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Option: Type & {
 Thing: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'option',
   ...props
  },
  children
 );
};

Option.Thing = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'option',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

export { Option };
