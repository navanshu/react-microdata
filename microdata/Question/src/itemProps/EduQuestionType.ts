import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'eduQuestionType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const EduQuestionType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'eduQuestionType',
   ...props
  },
  children
 );
};

EduQuestionType.Text = TextType;

export { EduQuestionType };
