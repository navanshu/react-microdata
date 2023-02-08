import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalProcedureTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'procedureType',
   itemScope: true,
   itemType: 'https://schema.org/MedicalProcedureType',
   ...props
  },
  children
 );
};

const ProcedureType: Type & { MedicalProcedureType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'procedureType',
   ...props
  },
  children
 );
};

ProcedureType.MedicalProcedureType = MedicalProcedureTypeType;

export { ProcedureType };
