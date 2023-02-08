import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'reviewAspect',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ReviewAspect: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'reviewAspect',
   ...props
  },
  children
 );
};

ReviewAspect.Text = TextType;

export { ReviewAspect };
