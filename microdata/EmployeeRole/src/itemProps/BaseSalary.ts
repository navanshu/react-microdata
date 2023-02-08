import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BaseSalary: Type & {
 Number: Type;
 PriceSpecification: Type;
 MonetaryAmount: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'baseSalary',
   ...props
  },
  children
 );
};

BaseSalary.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'baseSalary',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

BaseSalary.PriceSpecification = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'baseSalary',
   itemScope: true,
   itemType: 'https://schema.org/PriceSpecification',
   ...props
  },
  children
 );
};

BaseSalary.MonetaryAmount = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'baseSalary',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

export { BaseSalary };
