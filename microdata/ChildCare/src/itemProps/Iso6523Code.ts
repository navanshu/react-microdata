import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'iso6523Code',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Iso6523Code: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'iso6523Code',
   ...props
  },
  children
 );
};

Iso6523Code.Text = TextType;

export { Iso6523Code };
