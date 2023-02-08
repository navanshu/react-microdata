import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BlogPostingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'blogPost',
   itemScope: true,
   itemType: 'https://schema.org/BlogPosting',
   ...props
  },
  children
 );
};

const BlogPost: Type & { BlogPosting: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'blogPost',
   ...props
  },
  children
 );
};

BlogPost.BlogPosting = BlogPostingType;

export { BlogPost };
