import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'reviewBody',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ReviewBody: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'reviewBody',
   ...props
  },
  children
 );
};

ReviewBody.Text = TextType;

export { ReviewBody };
