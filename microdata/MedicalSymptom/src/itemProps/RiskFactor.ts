import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalRiskFactorType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'riskFactor',
   itemScope: true,
   itemType: 'https://schema.org/MedicalRiskFactor',
   ...props
  },
  children
 );
};

const RiskFactor: Type & { MedicalRiskFactor: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'riskFactor',
   ...props
  },
  children
 );
};

RiskFactor.MedicalRiskFactor = MedicalRiskFactorType;

export { RiskFactor };
