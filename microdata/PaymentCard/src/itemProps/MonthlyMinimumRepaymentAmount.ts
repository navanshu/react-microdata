import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MonthlyMinimumRepaymentAmount: Type & {
 MonetaryAmount: Type;
 Number: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'monthlyMinimumRepaymentAmount',
   ...props
  },
  children
 );
};

MonthlyMinimumRepaymentAmount.MonetaryAmount = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'monthlyMinimumRepaymentAmount',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

MonthlyMinimumRepaymentAmount.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'monthlyMinimumRepaymentAmount',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

export { MonthlyMinimumRepaymentAmount };
