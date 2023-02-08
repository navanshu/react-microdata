import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MerchantReturnPolicyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMerchantReturnPolicy',
   itemScope: true,
   itemType: 'https://schema.org/MerchantReturnPolicy',
   ...props
  },
  children
 );
};

const HasMerchantReturnPolicy: Type & { MerchantReturnPolicy: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasMerchantReturnPolicy',
   ...props
  },
  children
 );
};

HasMerchantReturnPolicy.MerchantReturnPolicy = MerchantReturnPolicyType;

export { HasMerchantReturnPolicy };
