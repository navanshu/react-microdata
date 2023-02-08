import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'inSupportOf',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const InSupportOf: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'inSupportOf',
   ...props
  },
  children
 );
};

InSupportOf.Text = TextType;

export { InSupportOf };
