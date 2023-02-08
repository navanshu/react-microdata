import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DDxElementType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'differentialDiagnosis',
   itemScope: true,
   itemType: 'https://schema.org/DDxElement',
   ...props
  },
  children
 );
};

const DifferentialDiagnosis: Type & { DDxElement: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'differentialDiagnosis',
   ...props
  },
  children
 );
};

DifferentialDiagnosis.DDxElement = DDxElementType;

export { DifferentialDiagnosis };
