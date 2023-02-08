import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';
type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MerchantReturnPolicySeasonalOverride: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemType: 'https://schema.org/MerchantReturnPolicySeasonalOverride',
   ...props
  },
  children
 );
};

export { MerchantReturnPolicySeasonalOverride };
