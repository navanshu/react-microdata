import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MonetaryAmountType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'accountMinimumInflow',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

const AccountMinimumInflow: Type & { MonetaryAmount: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accountMinimumInflow',
   ...props
  },
  children
 );
};

AccountMinimumInflow.MonetaryAmount = MonetaryAmountType;

export { AccountMinimumInflow };
