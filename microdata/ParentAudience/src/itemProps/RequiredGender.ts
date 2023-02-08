import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'requiredGender',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const RequiredGender: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'requiredGender',
   ...props
  },
  children
 );
};

RequiredGender.Text = TextType;

export { RequiredGender };
