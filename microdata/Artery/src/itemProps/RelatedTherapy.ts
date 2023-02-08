import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalTherapyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'relatedTherapy',
   itemScope: true,
   itemType: 'https://schema.org/MedicalTherapy',
   ...props
  },
  children
 );
};

const RelatedTherapy: Type & { MedicalTherapy: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'relatedTherapy',
   ...props
  },
  children
 );
};

RelatedTherapy.MedicalTherapy = MedicalTherapyType;

export { RelatedTherapy };
