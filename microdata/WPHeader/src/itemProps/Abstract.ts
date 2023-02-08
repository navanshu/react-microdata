import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'abstract',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Abstract: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'abstract',
   ...props
  },
  children
 );
};

Abstract.Text = TextType;

export { Abstract };
