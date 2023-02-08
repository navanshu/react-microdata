import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const FoodEvent: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'foodEvent',
   itemScope: true,
   itemType: 'https://schema.org/FoodEvent',
   ...props
  },
  children
 );
};

export { FoodEvent };
