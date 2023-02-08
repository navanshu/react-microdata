import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'streetAddress',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const StreetAddress: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'streetAddress',
   ...props
  },
  children
 );
};

StreetAddress.Text = TextType;

export { StreetAddress };
