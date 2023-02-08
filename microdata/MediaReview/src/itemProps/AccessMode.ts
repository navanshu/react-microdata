import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'accessMode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AccessMode: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accessMode',
   ...props
  },
  children
 );
};

AccessMode.Text = TextType;

export { AccessMode };
