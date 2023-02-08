import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RepeatFrequency: Type & {
 Duration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'repeatFrequency',
   ...props
  },
  children
 );
};

RepeatFrequency.Duration = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'repeatFrequency',
   itemScope: true,
   itemType: 'https://schema.org/Duration',
   ...props
  },
  children
 );
};

export { RepeatFrequency };
