import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'proprietaryName',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ProprietaryName: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'proprietaryName',
   ...props
  },
  children
 );
};

ProprietaryName.Text = TextType;

export { ProprietaryName };
