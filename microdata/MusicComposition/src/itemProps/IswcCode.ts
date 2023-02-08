import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'iswcCode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const IswcCode: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'iswcCode',
   ...props
  },
  children
 );
};

IswcCode.Text = TextType;

export { IswcCode };
