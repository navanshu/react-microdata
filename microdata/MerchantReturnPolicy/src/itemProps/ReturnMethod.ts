import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReturnMethodEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'returnMethod',
   itemScope: true,
   itemType: 'https://schema.org/ReturnMethodEnumeration',
   ...props
  },
  children
 );
};

const ReturnMethod: Type & { ReturnMethodEnumeration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'returnMethod',
   ...props
  },
  children
 );
};

ReturnMethod.ReturnMethodEnumeration = ReturnMethodEnumerationType;

export { ReturnMethod };
