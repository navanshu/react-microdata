import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Workload: Type & {
 QuantitativeValue: Type;
 Energy: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'workload',
   ...props
  },
  children
 );
};

Workload.QuantitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'workload',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

Workload.Energy = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'workload',
   itemScope: true,
   itemType: 'https://schema.org/Energy',
   ...props
  },
  children
 );
};

export { Workload };
