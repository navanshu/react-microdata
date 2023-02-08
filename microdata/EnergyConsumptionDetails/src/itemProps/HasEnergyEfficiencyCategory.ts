import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EnergyEfficiencyEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasEnergyEfficiencyCategory',
   itemScope: true,
   itemType: 'https://schema.org/EnergyEfficiencyEnumeration',
   ...props
  },
  children
 );
};

const HasEnergyEfficiencyCategory: Type & {
 EnergyEfficiencyEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasEnergyEfficiencyCategory',
   ...props
  },
  children
 );
};

HasEnergyEfficiencyCategory.EnergyEfficiencyEnumeration =
 EnergyEfficiencyEnumerationType;

export { HasEnergyEfficiencyCategory };
