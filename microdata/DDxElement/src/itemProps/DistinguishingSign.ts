import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalSignOrSymptomType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'distinguishingSign',
   itemScope: true,
   itemType: 'https://schema.org/MedicalSignOrSymptom',
   ...props
  },
  children
 );
};

const DistinguishingSign: Type & { MedicalSignOrSymptom: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'distinguishingSign',
   ...props
  },
  children
 );
};

DistinguishingSign.MedicalSignOrSymptom = MedicalSignOrSymptomType;

export { DistinguishingSign };
