import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'mealService',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const MealService: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'mealService',
   ...props
  },
  children
 );
};

MealService.Text = TextType;

export { MealService };
