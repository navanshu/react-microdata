import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'valuePattern',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ValuePattern: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'valuePattern',
   ...props
  },
  children
 );
};

ValuePattern.Text = TextType;

export { ValuePattern };
