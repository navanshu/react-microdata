import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'educationalFramework',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const EducationalFramework: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'educationalFramework',
   ...props
  },
  children
 );
};

EducationalFramework.Text = TextType;

export { EducationalFramework };
