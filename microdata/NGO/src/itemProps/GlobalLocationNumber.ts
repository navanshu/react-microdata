import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'globalLocationNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const GlobalLocationNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'globalLocationNumber',
   ...props
  },
  children
 );
};

GlobalLocationNumber.Text = TextType;

export { GlobalLocationNumber };
