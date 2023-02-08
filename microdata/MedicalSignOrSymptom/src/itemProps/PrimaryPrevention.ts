import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalTherapyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'primaryPrevention',
   itemScope: true,
   itemType: 'https://schema.org/MedicalTherapy',
   ...props
  },
  children
 );
};

const PrimaryPrevention: Type & { MedicalTherapy: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'primaryPrevention',
   ...props
  },
  children
 );
};

PrimaryPrevention.MedicalTherapy = MedicalTherapyType;

export { PrimaryPrevention };
