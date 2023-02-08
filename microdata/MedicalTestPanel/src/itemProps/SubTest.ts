import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalTestType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'subTest',
   itemScope: true,
   itemType: 'https://schema.org/MedicalTest',
   ...props
  },
  children
 );
};

const SubTest: Type & { MedicalTest: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'subTest',
   ...props
  },
  children
 );
};

SubTest.MedicalTest = MedicalTestType;

export { SubTest };
