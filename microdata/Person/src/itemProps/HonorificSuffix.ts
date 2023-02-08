import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'honorificSuffix',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const HonorificSuffix: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'honorificSuffix',
   ...props
  },
  children
 );
};

HonorificSuffix.Text = TextType;

export { HonorificSuffix };
