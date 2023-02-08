import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'ratingExplanation',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const RatingExplanation: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'ratingExplanation',
   ...props
  },
  children
 );
};

RatingExplanation.Text = TextType;

export { RatingExplanation };
