import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IntegerType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'commentCount',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

const CommentCount: Type & { Integer: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'commentCount',
   ...props
  },
  children
 );
};

CommentCount.Integer = IntegerType;

export { CommentCount };
