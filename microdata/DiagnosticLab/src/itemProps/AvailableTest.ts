import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalTestType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableTest',
   itemScope: true,
   itemType: 'https://schema.org/MedicalTest',
   ...props
  },
  children
 );
};

const AvailableTest: Type & { MedicalTest: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'availableTest',
   ...props
  },
  children
 );
};

AvailableTest.MedicalTest = MedicalTestType;

export { AvailableTest };
