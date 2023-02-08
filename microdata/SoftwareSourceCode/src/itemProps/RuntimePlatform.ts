import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'runtimePlatform',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const RuntimePlatform: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'runtimePlatform',
   ...props
  },
  children
 );
};

RuntimePlatform.Text = TextType;

export { RuntimePlatform };
