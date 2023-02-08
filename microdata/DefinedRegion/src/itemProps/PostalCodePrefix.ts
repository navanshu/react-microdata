import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'postalCodePrefix',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PostalCodePrefix: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'postalCodePrefix',
   ...props
  },
  children
 );
};

PostalCodePrefix.Text = TextType;

export { PostalCodePrefix };
