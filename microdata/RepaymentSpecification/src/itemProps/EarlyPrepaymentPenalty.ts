import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MonetaryAmountType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'earlyPrepaymentPenalty',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

const EarlyPrepaymentPenalty: Type & { MonetaryAmount: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'earlyPrepaymentPenalty',
   ...props
  },
  children
 );
};

EarlyPrepaymentPenalty.MonetaryAmount = MonetaryAmountType;

export { EarlyPrepaymentPenalty };
