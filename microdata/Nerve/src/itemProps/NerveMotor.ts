import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MuscleType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'nerveMotor',
   itemScope: true,
   itemType: 'https://schema.org/Muscle',
   ...props
  },
  children
 );
};

const NerveMotor: Type & { Muscle: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'nerveMotor',
   ...props
  },
  children
 );
};

NerveMotor.Muscle = MuscleType;

export { NerveMotor };
