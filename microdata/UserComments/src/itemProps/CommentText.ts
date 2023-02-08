import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'commentText',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CommentText: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'commentText',
   ...props
  },
  children
 );
};

CommentText.Text = TextType;

export { CommentText };
