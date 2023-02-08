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
   itemProp: 'trainingSalary',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmountDistribution',
   ...props
  },
  children
 );
};

const TrainingSalary: Type & { MonetaryAmountDistribution: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'trainingSalary',
   ...props
  },
  children
 );
};

TrainingSalary.MonetaryAmountDistribution = MonetaryAmountDistributionType;

export { TrainingSalary };
