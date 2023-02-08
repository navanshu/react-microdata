import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'permittedUsage',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PermittedUsage: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'permittedUsage',
   ...props
  },
  children
 );
};

PermittedUsage.Text = TextType;

export { PermittedUsage };
