import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ActivityDuration: Type & {
 Duration: Type;
 QuantitativeValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'activityDuration',
   ...props
  },
  children
 );
};

ActivityDuration.Duration = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'activityDuration',
   itemScope: true,
   itemType: 'https://schema.org/Duration',
   ...props
  },
  children
 );
};

ActivityDuration.QuantitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'activityDuration',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

export { ActivityDuration };
