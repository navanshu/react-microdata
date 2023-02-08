import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'legalName',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const LegalName: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'legalName',
   ...props
  },
  children
 );
};

LegalName.Text = TextType;

export { LegalName };
