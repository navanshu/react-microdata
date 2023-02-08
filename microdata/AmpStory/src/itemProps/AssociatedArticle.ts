import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const NewsArticleType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'associatedArticle',
   itemScope: true,
   itemType: 'https://schema.org/NewsArticle',
   ...props
  },
  children
 );
};

const AssociatedArticle: Type & { NewsArticle: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'associatedArticle',
   ...props
  },
  children
 );
};

AssociatedArticle.NewsArticle = NewsArticleType;

export { AssociatedArticle };
