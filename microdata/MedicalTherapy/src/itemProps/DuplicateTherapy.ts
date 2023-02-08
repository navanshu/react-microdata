import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalTherapyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'duplicateTherapy',
   itemScope: true,
   itemType: 'https://schema.org/MedicalTherapy',
   ...props
  },
  children
 );
};

const DuplicateTherapy: Type & { MedicalTherapy: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'duplicateTherapy',
   ...props
  },
  children
 );
};

DuplicateTherapy.MedicalTherapy = MedicalTherapyType;

export { DuplicateTherapy };
