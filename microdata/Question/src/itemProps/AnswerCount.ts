import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IntegerType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'answerCount',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

const AnswerCount: Type & { Integer: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'answerCount',
   ...props
  },
  children
 );
};

AnswerCount.Integer = IntegerType;

export { AnswerCount };
