import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const NutritionInformationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'nutrition',
   itemScope: true,
   itemType: 'https://schema.org/NutritionInformation',
   ...props
  },
  children
 );
};

const Nutrition: Type & { NutritionInformation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'nutrition',
   ...props
  },
  children
 );
};

Nutrition.NutritionInformation = NutritionInformationType;

export { Nutrition };
