import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'recommendationStrength',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const RecommendationStrength: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'recommendationStrength',
   ...props
  },
  children
 );
};

RecommendationStrength.Text = TextType;

export { RecommendationStrength };
