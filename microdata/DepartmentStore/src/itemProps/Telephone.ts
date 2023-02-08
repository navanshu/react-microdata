import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'telephone',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Telephone: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'telephone',
   ...props
  },
  children
 );
};

Telephone.Text = TextType;

export { Telephone };
