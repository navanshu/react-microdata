import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'articleSection',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ArticleSection: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'articleSection',
   ...props
  },
  children
 );
};

ArticleSection.Text = TextType;

export { ArticleSection };
