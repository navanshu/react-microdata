import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalSpecialtyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'relevantSpecialty',
   itemScope: true,
   itemType: 'https://schema.org/MedicalSpecialty',
   ...props
  },
  children
 );
};

const RelevantSpecialty: Type & { MedicalSpecialty: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'relevantSpecialty',
   ...props
  },
  children
 );
};

RelevantSpecialty.MedicalSpecialty = MedicalSpecialtyType;

export { RelevantSpecialty };
