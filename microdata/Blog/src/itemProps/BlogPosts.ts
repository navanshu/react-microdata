import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BlogPostingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'blogPosts',
   itemScope: true,
   itemType: 'https://schema.org/BlogPosting',
   ...props
  },
  children
 );
};

const BlogPosts: Type & { BlogPosting: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'blogPosts',
   ...props
  },
  children
 );
};

BlogPosts.BlogPosting = BlogPostingType;

export { BlogPosts };
