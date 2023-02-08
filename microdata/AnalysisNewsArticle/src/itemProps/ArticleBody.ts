import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'articleBody',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ArticleBody: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'articleBody',
   ...props
  },
  children
 );
};

ArticleBody.Text = TextType;

export { ArticleBody };
