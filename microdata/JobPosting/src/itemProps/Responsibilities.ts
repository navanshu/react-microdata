import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'responsibilities',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Responsibilities: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'responsibilities',
   ...props
  },
  children
 );
};

Responsibilities.Text = TextType;

export { Responsibilities };
