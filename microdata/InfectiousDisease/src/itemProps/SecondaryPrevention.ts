import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalTherapyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'secondaryPrevention',
   itemScope: true,
   itemType: 'https://schema.org/MedicalTherapy',
   ...props
  },
  children
 );
};

const SecondaryPrevention: Type & { MedicalTherapy: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'secondaryPrevention',
   ...props
  },
  children
 );
};

SecondaryPrevention.MedicalTherapy = MedicalTherapyType;

export { SecondaryPrevention };
