import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const QuantitativeValueType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'accelerationTime',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

const AccelerationTime: Type & { QuantitativeValue: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accelerationTime',
   ...props
  },
  children
 );
};

AccelerationTime.QuantitativeValue = QuantitativeValueType;

export { AccelerationTime };
