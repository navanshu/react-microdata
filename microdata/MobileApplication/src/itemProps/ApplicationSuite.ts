import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'applicationSuite',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ApplicationSuite: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'applicationSuite',
   ...props
  },
  children
 );
};

ApplicationSuite.Text = TextType;

export { ApplicationSuite };
