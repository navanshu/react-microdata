import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'postalCode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PostalCode: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'postalCode',
   ...props
  },
  children
 );
};

PostalCode.Text = TextType;

export { PostalCode };
