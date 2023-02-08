import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HealthPlanNetworkType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'includesHealthPlanNetwork',
   itemScope: true,
   itemType: 'https://schema.org/HealthPlanNetwork',
   ...props
  },
  children
 );
};

const IncludesHealthPlanNetwork: Type & { HealthPlanNetwork: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'includesHealthPlanNetwork',
   ...props
  },
  children
 );
};

IncludesHealthPlanNetwork.HealthPlanNetwork = HealthPlanNetworkType;

export { IncludesHealthPlanNetwork };
