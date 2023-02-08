import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DateTimeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableFrom',
   itemScope: true,
   itemType: 'https://schema.org/DateTime',
   ...props
  },
  children
 );
};

const AvailableFrom: Type & { DateTime: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'availableFrom',
   ...props
  },
  children
 );
};

AvailableFrom.DateTime = DateTimeType;

export { AvailableFrom };
