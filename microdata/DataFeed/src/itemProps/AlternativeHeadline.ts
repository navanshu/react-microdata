import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'alternativeHeadline',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AlternativeHeadline: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'alternativeHeadline',
   ...props
  },
  children
 );
};

AlternativeHeadline.Text = TextType;

export { AlternativeHeadline };
