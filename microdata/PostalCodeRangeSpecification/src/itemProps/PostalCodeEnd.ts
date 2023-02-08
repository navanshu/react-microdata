import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'postalCodeEnd',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PostalCodeEnd: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'postalCodeEnd',
   ...props
  },
  children
 );
};

PostalCodeEnd.Text = TextType;

export { PostalCodeEnd };
