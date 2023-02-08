import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalGuidelineType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'guideline',
   itemScope: true,
   itemType: 'https://schema.org/MedicalGuideline',
   ...props
  },
  children
 );
};

const Guideline: Type & { MedicalGuideline: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'guideline',
   ...props
  },
  children
 );
};

Guideline.MedicalGuideline = MedicalGuidelineType;

export { Guideline };
