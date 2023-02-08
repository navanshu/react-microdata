import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'employmentType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const EmploymentType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'employmentType',
   ...props
  },
  children
 );
};

EmploymentType.Text = TextType;

export { EmploymentType };
