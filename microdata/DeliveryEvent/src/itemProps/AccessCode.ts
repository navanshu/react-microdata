import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'accessCode',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AccessCode: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accessCode',
   ...props
  },
  children
 );
};

AccessCode.Text = TextType;

export { AccessCode };
