import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const QualitativeValueType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'lesserOrEqual',
   itemScope: true,
   itemType: 'https://schema.org/QualitativeValue',
   ...props
  },
  children
 );
};

const LesserOrEqual: Type & { QualitativeValue: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'lesserOrEqual',
   ...props
  },
  children
 );
};

LesserOrEqual.QualitativeValue = QualitativeValueType;

export { LesserOrEqual };
