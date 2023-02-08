import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MerchantReturnEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'returnPolicyCategory',
   itemScope: true,
   itemType: 'https://schema.org/MerchantReturnEnumeration',
   ...props
  },
  children
 );
};

const ReturnPolicyCategory: Type & { MerchantReturnEnumeration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'returnPolicyCategory',
   ...props
  },
  children
 );
};

ReturnPolicyCategory.MerchantReturnEnumeration = MerchantReturnEnumerationType;

export { ReturnPolicyCategory };
