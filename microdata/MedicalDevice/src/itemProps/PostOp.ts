import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'postOp',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PostOp: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'postOp',
   ...props
  },
  children
 );
};

PostOp.Text = TextType;

export { PostOp };
