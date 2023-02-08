import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PriceSpecificationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'healthPlanCopay',
   itemScope: true,
   itemType: 'https://schema.org/PriceSpecification',
   ...props
  },
  children
 );
};

const HealthPlanCopay: Type & { PriceSpecification: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'healthPlanCopay',
   ...props
  },
  children
 );
};

HealthPlanCopay.PriceSpecification = PriceSpecificationType;

export { HealthPlanCopay };
