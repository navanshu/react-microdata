import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EstimatedSalary: Type & {
 MonetaryAmountDistribution: Type;
 MonetaryAmount: Type;
 Number: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'estimatedSalary',
   ...props
  },
  children
 );
};

EstimatedSalary.MonetaryAmountDistribution = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'estimatedSalary',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmountDistribution',
   ...props
  },
  children
 );
};

EstimatedSalary.MonetaryAmount = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'estimatedSalary',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

EstimatedSalary.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'estimatedSalary',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

export { EstimatedSalary };
