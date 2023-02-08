import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RepaymentSpecificationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'loanRepaymentForm',
   itemScope: true,
   itemType: 'https://schema.org/RepaymentSpecification',
   ...props
  },
  children
 );
};

const LoanRepaymentForm: Type & { RepaymentSpecification: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'loanRepaymentForm',
   ...props
  },
  children
 );
};

LoanRepaymentForm.RepaymentSpecification = RepaymentSpecificationType;

export { LoanRepaymentForm };
