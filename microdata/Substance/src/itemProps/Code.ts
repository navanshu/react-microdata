import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalCodeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'code',
   itemScope: true,
   itemType: 'https://schema.org/MedicalCode',
   ...props
  },
  children
 );
};

const Code: Type & { MedicalCode: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'code',
   ...props
  },
  children
 );
};

Code.MedicalCode = MedicalCodeType;

export { Code };
