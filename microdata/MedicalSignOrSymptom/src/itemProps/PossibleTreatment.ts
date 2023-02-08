import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalTherapyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'possibleTreatment',
   itemScope: true,
   itemType: 'https://schema.org/MedicalTherapy',
   ...props
  },
  children
 );
};

const PossibleTreatment: Type & { MedicalTherapy: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'possibleTreatment',
   ...props
  },
  children
 );
};

PossibleTreatment.MedicalTherapy = MedicalTherapyType;

export { PossibleTreatment };
