import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DateTimeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'datasetTimeInterval',
   itemScope: true,
   itemType: 'https://schema.org/DateTime',
   ...props
  },
  children
 );
};

const DatasetTimeInterval: Type & { DateTime: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'datasetTimeInterval',
   ...props
  },
  children
 );
};

DatasetTimeInterval.DateTime = DateTimeType;

export { DatasetTimeInterval };
