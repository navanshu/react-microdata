import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LeaseLength: Type & {
 QuantitativeValue: Type;
 Duration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'leaseLength',
   ...props
  },
  children
 );
};

LeaseLength.QuantitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'leaseLength',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

LeaseLength.Duration = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'leaseLength',
   itemScope: true,
   itemType: 'https://schema.org/Duration',
   ...props
  },
  children
 );
};

export { LeaseLength };
