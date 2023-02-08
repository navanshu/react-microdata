import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'muscleAction',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const MuscleAction: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'muscleAction',
   ...props
  },
  children
 );
};

MuscleAction.Text = TextType;

export { MuscleAction };
