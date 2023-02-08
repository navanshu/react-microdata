import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EUEnergyEfficiencyEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'energyEfficiencyScaleMin',
   itemScope: true,
   itemType: 'https://schema.org/EUEnergyEfficiencyEnumeration',
   ...props
  },
  children
 );
};

const EnergyEfficiencyScaleMin: Type & {
 EUEnergyEfficiencyEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'energyEfficiencyScaleMin',
   ...props
  },
  children
 );
};

EnergyEfficiencyScaleMin.EUEnergyEfficiencyEnumeration =
 EUEnergyEfficiencyEnumerationType;

export { EnergyEfficiencyScaleMin };
