import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalTestType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'typicalTest',
   itemScope: true,
   itemType: 'https://schema.org/MedicalTest',
   ...props
  },
  children
 );
};

const TypicalTest: Type & { MedicalTest: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'typicalTest',
   ...props
  },
  children
 );
};

TypicalTest.MedicalTest = MedicalTestType;

export { TypicalTest };
