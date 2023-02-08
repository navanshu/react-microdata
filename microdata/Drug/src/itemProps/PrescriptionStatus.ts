import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PrescriptionStatus: Type & {
 DrugPrescriptionStatus: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'prescriptionStatus',
   ...props
  },
  children
 );
};

PrescriptionStatus.DrugPrescriptionStatus = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'prescriptionStatus',
   itemScope: true,
   itemType: 'https://schema.org/DrugPrescriptionStatus',
   ...props
  },
  children
 );
};

export { PrescriptionStatus };
