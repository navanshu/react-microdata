import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const QualitativeValueType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'equal',
   itemScope: true,
   itemType: 'https://schema.org/QualitativeValue',
   ...props
  },
  children
 );
};

const Equal: Type & { QualitativeValue: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'equal',
   ...props
  },
  children
 );
};

Equal.QualitativeValue = QualitativeValueType;

export { Equal };
