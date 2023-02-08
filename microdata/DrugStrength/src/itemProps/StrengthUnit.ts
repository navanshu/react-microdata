import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'strengthUnit',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const StrengthUnit: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'strengthUnit',
   ...props
  },
  children
 );
};

StrengthUnit.Text = TextType;

export { StrengthUnit };
