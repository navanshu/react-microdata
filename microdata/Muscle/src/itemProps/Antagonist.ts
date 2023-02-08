import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MuscleType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'antagonist',
   itemScope: true,
   itemType: 'https://schema.org/Muscle',
   ...props
  },
  children
 );
};

const Antagonist: Type & { Muscle: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'antagonist',
   ...props
  },
  children
 );
};

Antagonist.Muscle = MuscleType;

export { Antagonist };
