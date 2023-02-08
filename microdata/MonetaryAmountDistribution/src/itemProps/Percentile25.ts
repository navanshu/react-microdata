import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const NumberType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'percentile25',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

const Percentile25: Type & { Number: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'percentile25',
   ...props
  },
  children
 );
};

Percentile25.Number = NumberType;

export { Percentile25 };
