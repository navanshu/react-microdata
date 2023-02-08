import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AnswerExplanation: Type & {
 WebContent: Type;
 Comment: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'answerExplanation',
   ...props
  },
  children
 );
};

AnswerExplanation.WebContent = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'answerExplanation',
   itemScope: true,
   itemType: 'https://schema.org/WebContent',
   ...props
  },
  children
 );
};

AnswerExplanation.Comment = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'answerExplanation',
   itemScope: true,
   itemType: 'https://schema.org/Comment',
   ...props
  },
  children
 );
};

export { AnswerExplanation };
