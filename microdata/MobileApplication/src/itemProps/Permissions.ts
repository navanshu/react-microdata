import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'permissions',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Permissions: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'permissions',
   ...props
  },
  children
 );
};

Permissions.Text = TextType;

export { Permissions };
