import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DateTimeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'coverageEndTime',
   itemScope: true,
   itemType: 'https://schema.org/DateTime',
   ...props
  },
  children
 );
};

const CoverageEndTime: Type & { DateTime: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'coverageEndTime',
   ...props
  },
  children
 );
};

CoverageEndTime.DateTime = DateTimeType;

export { CoverageEndTime };
