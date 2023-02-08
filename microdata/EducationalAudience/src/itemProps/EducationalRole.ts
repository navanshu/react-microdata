import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'educationalRole',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const EducationalRole: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'educationalRole',
   ...props
  },
  children
 );
};

EducationalRole.Text = TextType;

export { EducationalRole };
