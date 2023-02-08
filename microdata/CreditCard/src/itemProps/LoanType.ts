import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LoanType: Type & {
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'loanType',
   ...props
  },
  children
 );
};

LoanType.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'loanType',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { LoanType };
