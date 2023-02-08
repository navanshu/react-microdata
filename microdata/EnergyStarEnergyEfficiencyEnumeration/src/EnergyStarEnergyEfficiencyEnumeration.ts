import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';
type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EnergyStarEnergyEfficiencyEnumeration: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemType: 'https://schema.org/EnergyStarEnergyEfficiencyEnumeration',
   ...props
  },
  children
 );
};

export { EnergyStarEnergyEfficiencyEnumeration };
