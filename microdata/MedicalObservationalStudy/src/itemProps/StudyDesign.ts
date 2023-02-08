import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalObservationalStudyDesignType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'studyDesign',
   itemScope: true,
   itemType: 'https://schema.org/MedicalObservationalStudyDesign',
   ...props
  },
  children
 );
};

const StudyDesign: Type & { MedicalObservationalStudyDesign: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'studyDesign',
   ...props
  },
  children
 );
};

StudyDesign.MedicalObservationalStudyDesign =
 MedicalObservationalStudyDesignType;

export { StudyDesign };
