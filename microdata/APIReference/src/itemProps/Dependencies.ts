import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'dependencies',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Dependencies: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'dependencies',
   ...props
  },
  children
 );
};

Dependencies.Text = TextType;

export { Dependencies };
