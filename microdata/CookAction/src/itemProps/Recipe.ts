import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Recipe: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'recipe',
   itemScope: true,
   itemType: 'https://schema.org/Recipe',
   ...props
  },
  children
 );
};

export { Recipe };
