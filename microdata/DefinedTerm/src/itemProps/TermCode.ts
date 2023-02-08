import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'termCode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TermCode: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'termCode',
   ...props
  },
  children
 );
};

TermCode.Text = TextType;

export { TermCode };
