import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReturnLabelSourceEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'returnLabelSource',
   itemScope: true,
   itemType: 'https://schema.org/ReturnLabelSourceEnumeration',
   ...props
  },
  children
 );
};

const ReturnLabelSource: Type & { ReturnLabelSourceEnumeration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'returnLabelSource',
   ...props
  },
  children
 );
};

ReturnLabelSource.ReturnLabelSourceEnumeration =
 ReturnLabelSourceEnumerationType;

export { ReturnLabelSource };
