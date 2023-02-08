import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MathExpression: Type & {
 SolveMathAction: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'mathExpression',
   ...props
  },
  children
 );
};

MathExpression.SolveMathAction = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'mathExpression',
   itemScope: true,
   itemType: 'https://schema.org/SolveMathAction',
   ...props
  },
  children
 );
};

export { MathExpression };
