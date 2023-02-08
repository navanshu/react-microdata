import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalSignOrSymptomType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'signOrSymptom',
   itemScope: true,
   itemType: 'https://schema.org/MedicalSignOrSymptom',
   ...props
  },
  children
 );
};

const SignOrSymptom: Type & { MedicalSignOrSymptom: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'signOrSymptom',
   ...props
  },
  children
 );
};

SignOrSymptom.MedicalSignOrSymptom = MedicalSignOrSymptomType;

export { SignOrSymptom };
