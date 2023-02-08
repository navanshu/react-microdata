import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CommentType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'parentItem',
   itemScope: true,
   itemType: 'https://schema.org/Comment',
   ...props
  },
  children
 );
};

const ParentItem: Type & { Comment: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'parentItem',
   ...props
  },
  children
 );
};

ParentItem.Comment = CommentType;

export { ParentItem };
