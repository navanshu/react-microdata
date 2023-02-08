import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalAudience: Type & {
 MedicalAudienceType: Type;
 MedicalAudience: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'medicalAudience',
   ...props
  },
  children
 );
};

MedicalAudience.MedicalAudienceType = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'medicalAudience',
   itemScope: true,
   itemType: 'https://schema.org/MedicalAudienceType',
   ...props
  },
  children
 );
};

MedicalAudience.MedicalAudience = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'medicalAudience',
   itemScope: true,
   itemType: 'https://schema.org/MedicalAudience',
   ...props
  },
  children
 );
};

export { MedicalAudience };
