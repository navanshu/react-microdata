import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ActivityFrequency: Type & {
 QuantitativeValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'activityFrequency',
   ...props
  },
  children
 );
};

ActivityFrequency.QuantitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'activityFrequency',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

export { ActivityFrequency };
