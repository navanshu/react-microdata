import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LegalStatus: Type & {
 DrugLegalStatus: Type;
 MedicalEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legalStatus',
   ...props
  },
  children
 );
};

LegalStatus.DrugLegalStatus = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legalStatus',
   itemScope: true,
   itemType: 'https://schema.org/DrugLegalStatus',
   ...props
  },
  children
 );
};

LegalStatus.MedicalEnumeration = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legalStatus',
   itemScope: true,
   itemType: 'https://schema.org/MedicalEnumeration',
   ...props
  },
  children
 );
};

export { LegalStatus };
