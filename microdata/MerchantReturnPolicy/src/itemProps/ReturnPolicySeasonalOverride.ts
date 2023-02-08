import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MerchantReturnPolicySeasonalOverrideType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'returnPolicySeasonalOverride',
   itemScope: true,
   itemType: 'https://schema.org/MerchantReturnPolicySeasonalOverride',
   ...props
  },
  children
 );
};

const ReturnPolicySeasonalOverride: Type & {
 MerchantReturnPolicySeasonalOverride: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'returnPolicySeasonalOverride',
   ...props
  },
  children
 );
};

ReturnPolicySeasonalOverride.MerchantReturnPolicySeasonalOverride =
 MerchantReturnPolicySeasonalOverrideType;

export { ReturnPolicySeasonalOverride };
