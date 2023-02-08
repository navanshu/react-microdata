import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IntegerType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'byMonthDay',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

const ByMonthDay: Type & { Integer: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'byMonthDay',
   ...props
  },
  children
 );
};

ByMonthDay.Integer = IntegerType;

export { ByMonthDay };
