import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'faxNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const FaxNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'faxNumber',
   ...props
  },
  children
 );
};

FaxNumber.Text = TextType;

export { FaxNumber };
