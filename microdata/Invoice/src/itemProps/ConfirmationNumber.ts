import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'confirmationNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ConfirmationNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'confirmationNumber',
   ...props
  },
  children
 );
};

ConfirmationNumber.Text = TextType;

export { ConfirmationNumber };
