import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'inChIKey',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const InChIKey: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'inChIKey',
   ...props
  },
  children
 );
};

InChIKey.Text = TextType;

export { InChIKey };
