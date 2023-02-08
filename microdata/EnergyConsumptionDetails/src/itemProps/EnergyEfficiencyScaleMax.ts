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
   itemProp: 'energyEfficiencyScaleMax',
   itemScope: true,
   itemType: 'https://schema.org/EUEnergyEfficiencyEnumeration',
   ...props
  },
  children
 );
};

const EnergyEfficiencyScaleMax: Type & {
 EUEnergyEfficiencyEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'energyEfficiencyScaleMax',
   ...props
  },
  children
 );
};

EnergyEfficiencyScaleMax.EUEnergyEfficiencyEnumeration =
 EUEnergyEfficiencyEnumerationType;

export { EnergyEfficiencyScaleMax };
