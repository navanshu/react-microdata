import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'nonProprietaryName',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const NonProprietaryName: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'nonProprietaryName',
   ...props
  },
  children
 );
};

NonProprietaryName.Text = TextType;

export { NonProprietaryName };
