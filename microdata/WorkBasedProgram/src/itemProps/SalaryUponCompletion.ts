import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MonetaryAmountDistributionType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'salaryUponCompletion',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmountDistribution',
   ...props
  },
  children
 );
};

const SalaryUponCompletion: Type & { MonetaryAmountDistribution: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'salaryUponCompletion',
   ...props
  },
  children
 );
};

SalaryUponCompletion.MonetaryAmountDistribution =
 MonetaryAmountDistributionType;

export { SalaryUponCompletion };
