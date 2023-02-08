import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'originalMediaContextDescription',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const OriginalMediaContextDescription: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'originalMediaContextDescription',
   ...props
  },
  children
 );
};

OriginalMediaContextDescription.Text = TextType;

export { OriginalMediaContextDescription };
