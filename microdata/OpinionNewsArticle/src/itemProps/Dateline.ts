import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'dateline',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Dateline: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'dateline',
   ...props
  },
  children
 );
};

Dateline.Text = TextType;

export { Dateline };
