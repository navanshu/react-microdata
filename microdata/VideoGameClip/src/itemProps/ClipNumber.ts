import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ClipNumber: Type & {
 Integer: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'clipNumber',
   ...props
  },
  children
 );
};

ClipNumber.Integer = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'clipNumber',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

export { ClipNumber };
