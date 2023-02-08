import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'employerOverview',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const EmployerOverview: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'employerOverview',
   ...props
  },
  children
 );
};

EmployerOverview.Text = TextType;

export { EmployerOverview };
