import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DoseValue: Type & {
 Number: Type;
 QualitativeValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'doseValue',
   ...props
  },
  children
 );
};

DoseValue.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'doseValue',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

DoseValue.QualitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'doseValue',
   itemScope: true,
   itemType: 'https://schema.org/QualitativeValue',
   ...props
  },
  children
 );
};

export { DoseValue };
