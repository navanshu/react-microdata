import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'benefits',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Benefits: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'benefits',
   ...props
  },
  children
 );
};

Benefits.Text = TextType;

export { Benefits };
