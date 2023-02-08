import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RefundTypeEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'refundType',
   itemScope: true,
   itemType: 'https://schema.org/RefundTypeEnumeration',
   ...props
  },
  children
 );
};

const RefundType: Type & { RefundTypeEnumeration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'refundType',
   ...props
  },
  children
 );
};

RefundType.RefundTypeEnumeration = RefundTypeEnumerationType;

export { RefundType };
