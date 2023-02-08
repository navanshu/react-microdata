import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CommentType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'resultComment',
   itemScope: true,
   itemType: 'https://schema.org/Comment',
   ...props
  },
  children
 );
};

const ResultComment: Type & { Comment: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'resultComment',
   ...props
  },
  children
 );
};

ResultComment.Comment = CommentType;

export { ResultComment };
