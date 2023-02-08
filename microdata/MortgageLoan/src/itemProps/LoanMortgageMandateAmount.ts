import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MonetaryAmountType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'loanMortgageMandateAmount',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

const LoanMortgageMandateAmount: Type & { MonetaryAmount: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'loanMortgageMandateAmount',
   ...props
  },
  children
 );
};

LoanMortgageMandateAmount.MonetaryAmount = MonetaryAmountType;

export { LoanMortgageMandateAmount };
