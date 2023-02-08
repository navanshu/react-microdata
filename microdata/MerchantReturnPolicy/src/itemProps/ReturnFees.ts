import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReturnFeesEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'returnFees',
   itemScope: true,
   itemType: 'https://schema.org/ReturnFeesEnumeration',
   ...props
  },
  children
 );
};

const ReturnFees: Type & { ReturnFeesEnumeration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'returnFees',
   ...props
  },
  children
 );
};

ReturnFees.ReturnFeesEnumeration = ReturnFeesEnumerationType;

export { ReturnFees };
