import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'significance',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Significance: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'significance',
   ...props
  },
  children
 );
};

Significance.Text = TextType;

export { Significance };
