import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'acrissCode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AcrissCode: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'acrissCode',
   ...props
  },
  children
 );
};

AcrissCode.Text = TextType;

export { AcrissCode };
