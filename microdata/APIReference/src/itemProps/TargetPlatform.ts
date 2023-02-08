import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'targetPlatform',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TargetPlatform: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'targetPlatform',
   ...props
  },
  children
 );
};

TargetPlatform.Text = TextType;

export { TargetPlatform };
