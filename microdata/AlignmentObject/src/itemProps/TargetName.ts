import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'targetName',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TargetName: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'targetName',
   ...props
  },
  children
 );
};

TargetName.Text = TextType;

export { TargetName };
