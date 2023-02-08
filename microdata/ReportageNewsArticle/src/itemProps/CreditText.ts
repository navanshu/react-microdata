import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'creditText',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CreditText: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'creditText',
   ...props
  },
  children
 );
};

CreditText.Text = TextType;

export { CreditText };
