import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'assembly',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Assembly: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'assembly',
   ...props
  },
  children
 );
};

Assembly.Text = TextType;

export { Assembly };
