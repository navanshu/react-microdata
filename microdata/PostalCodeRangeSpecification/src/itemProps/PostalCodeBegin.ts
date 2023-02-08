import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'postalCodeBegin',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PostalCodeBegin: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'postalCodeBegin',
   ...props
  },
  children
 );
};

PostalCodeBegin.Text = TextType;

export { PostalCodeBegin };
