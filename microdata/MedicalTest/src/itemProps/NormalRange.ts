import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const NormalRange: Type & {
 MedicalEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'normalRange',
   ...props
  },
  children
 );
};

NormalRange.MedicalEnumeration = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'normalRange',
   itemScope: true,
   itemType: 'https://schema.org/MedicalEnumeration',
   ...props
  },
  children
 );
};

export { NormalRange };
