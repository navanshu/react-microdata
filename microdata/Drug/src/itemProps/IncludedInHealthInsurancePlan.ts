import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HealthInsurancePlanType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'includedInHealthInsurancePlan',
   itemScope: true,
   itemType: 'https://schema.org/HealthInsurancePlan',
   ...props
  },
  children
 );
};

const IncludedInHealthInsurancePlan: Type & { HealthInsurancePlan: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'includedInHealthInsurancePlan',
   ...props
  },
  children
 );
};

IncludedInHealthInsurancePlan.HealthInsurancePlan = HealthInsurancePlanType;

export { IncludedInHealthInsurancePlan };
