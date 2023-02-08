import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AvailableService: Type & {
 MedicalTest: Type;
 MedicalProcedure: Type;
 MedicalTherapy: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableService',
   ...props
  },
  children
 );
};

AvailableService.MedicalTest = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableService',
   itemScope: true,
   itemType: 'https://schema.org/MedicalTest',
   ...props
  },
  children
 );
};

AvailableService.MedicalProcedure = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableService',
   itemScope: true,
   itemType: 'https://schema.org/MedicalProcedure',
   ...props
  },
  children
 );
};

AvailableService.MedicalTherapy = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableService',
   itemScope: true,
   itemType: 'https://schema.org/MedicalTherapy',
   ...props
  },
  children
 );
};

export { AvailableService };
