import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'algorithm',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Algorithm: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'algorithm',
   ...props
  },
  children
 );
};

Algorithm.Text = TextType;

export { Algorithm };
