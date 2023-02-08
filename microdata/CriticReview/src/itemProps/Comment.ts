import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Comment: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'comment',
   itemScope: true,
   itemType: 'https://schema.org/Comment',
   ...props
  },
  children
 );
};

export { Comment };
