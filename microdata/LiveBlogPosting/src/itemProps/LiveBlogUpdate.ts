import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BlogPostingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'liveBlogUpdate',
   itemScope: true,
   itemType: 'https://schema.org/BlogPosting',
   ...props
  },
  children
 );
};

const LiveBlogUpdate: Type & { BlogPosting: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'liveBlogUpdate',
   ...props
  },
  children
 );
};

LiveBlogUpdate.BlogPosting = BlogPostingType;

export { LiveBlogUpdate };
