import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MonetaryAmountType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'accountOverdraftLimit',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

const AccountOverdraftLimit: Type & { MonetaryAmount: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accountOverdraftLimit',
   ...props
  },
  children
 );
};

AccountOverdraftLimit.MonetaryAmount = MonetaryAmountType;

export { AccountOverdraftLimit };
