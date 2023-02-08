import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'honorificPrefix',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const HonorificPrefix: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'honorificPrefix',
   ...props
  },
  children
 );
};

HonorificPrefix.Text = TextType;

export { HonorificPrefix };
