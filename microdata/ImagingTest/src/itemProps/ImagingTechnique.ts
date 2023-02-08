import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalImagingTechniqueType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'imagingTechnique',
   itemScope: true,
   itemType: 'https://schema.org/MedicalImagingTechnique',
   ...props
  },
  children
 );
};

const ImagingTechnique: Type & { MedicalImagingTechnique: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'imagingTechnique',
   ...props
  },
  children
 );
};

ImagingTechnique.MedicalImagingTechnique = MedicalImagingTechniqueType;

export { ImagingTechnique };
