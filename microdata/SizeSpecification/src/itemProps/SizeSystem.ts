import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SizeSystem: Type & {
 SizeSystemEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sizeSystem',
   ...props
  },
  children
 );
};

SizeSystem.SizeSystemEnumeration = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sizeSystem',
   itemScope: true,
   itemType: 'https://schema.org/SizeSystemEnumeration',
   ...props
  },
  children
 );
};

export { SizeSystem };
