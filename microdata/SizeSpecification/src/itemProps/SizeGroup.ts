import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SizeGroup: Type & {
 SizeGroupEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sizeGroup',
   ...props
  },
  children
 );
};

SizeGroup.SizeGroupEnumeration = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sizeGroup',
   itemScope: true,
   itemType: 'https://schema.org/SizeGroupEnumeration',
   ...props
  },
  children
 );
};

export { SizeGroup };
