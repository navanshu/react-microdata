import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalRiskFactorType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'includedRiskFactor',
   itemScope: true,
   itemType: 'https://schema.org/MedicalRiskFactor',
   ...props
  },
  children
 );
};

const IncludedRiskFactor: Type & { MedicalRiskFactor: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'includedRiskFactor',
   ...props
  },
  children
 );
};

IncludedRiskFactor.MedicalRiskFactor = MedicalRiskFactorType;

export { IncludedRiskFactor };
