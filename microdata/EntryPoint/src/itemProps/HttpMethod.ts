import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'httpMethod',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const HttpMethod: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'httpMethod',
   ...props
  },
  children
 );
};

HttpMethod.Text = TextType;

export { HttpMethod };
