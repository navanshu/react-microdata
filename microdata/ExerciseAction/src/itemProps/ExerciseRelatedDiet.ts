import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DietType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'exerciseRelatedDiet',
   itemScope: true,
   itemType: 'https://schema.org/Diet',
   ...props
  },
  children
 );
};

const ExerciseRelatedDiet: Type & { Diet: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'exerciseRelatedDiet',
   ...props
  },
  children
 );
};

ExerciseRelatedDiet.Diet = DietType;

export { ExerciseRelatedDiet };
