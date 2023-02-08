import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'exerciseType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ExerciseType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'exerciseType',
   ...props
  },
  children
 );
};

ExerciseType.Text = TextType;

export { ExerciseType };
