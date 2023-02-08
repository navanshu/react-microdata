import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ServiceType: Type & {
 GovernmentBenefitsType: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'serviceType',
   ...props
  },
  children
 );
};

ServiceType.GovernmentBenefitsType = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'serviceType',
   itemScope: true,
   itemType: 'https://schema.org/GovernmentBenefitsType',
   ...props
  },
  children
 );
};

export { ServiceType };
