import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalSignType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'signDetected',
   itemScope: true,
   itemType: 'https://schema.org/MedicalSign',
   ...props
  },
  children
 );
};

const SignDetected: Type & { MedicalSign: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'signDetected',
   ...props
  },
  children
 );
};

SignDetected.MedicalSign = MedicalSignType;

export { SignDetected };
