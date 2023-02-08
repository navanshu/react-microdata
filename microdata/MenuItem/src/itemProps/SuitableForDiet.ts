import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RestrictedDietType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'suitableForDiet',
   itemScope: true,
   itemType: 'https://schema.org/RestrictedDiet',
   ...props
  },
  children
 );
};

const SuitableForDiet: Type & { RestrictedDiet: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'suitableForDiet',
   ...props
  },
  children
 );
};

SuitableForDiet.RestrictedDiet = RestrictedDietType;

export { SuitableForDiet };
