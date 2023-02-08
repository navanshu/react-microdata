import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RequiredCollateral: Type & {
 Thing: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'requiredCollateral',
   ...props
  },
  children
 );
};

RequiredCollateral.Thing = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'requiredCollateral',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

export { RequiredCollateral };
