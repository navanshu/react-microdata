import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const FoodEstablishment: Type & {
 Place: Type;
 FoodEstablishment: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'foodEstablishment',
   ...props
  },
  children
 );
};

FoodEstablishment.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'foodEstablishment',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

FoodEstablishment.FoodEstablishment = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'foodEstablishment',
   itemScope: true,
   itemType: 'https://schema.org/FoodEstablishment',
   ...props
  },
  children
 );
};

export { FoodEstablishment };
