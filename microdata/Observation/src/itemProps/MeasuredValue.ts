import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DataTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'measuredValue',
   itemScope: true,
   itemType: 'https://schema.org/DataType',
   ...props
  },
  children
 );
};

const MeasuredValue: Type & { DataType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'measuredValue',
   ...props
  },
  children
 );
};

MeasuredValue.DataType = DataTypeType;

export { MeasuredValue };
