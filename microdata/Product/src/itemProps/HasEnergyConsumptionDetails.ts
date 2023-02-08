import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EnergyConsumptionDetailsType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasEnergyConsumptionDetails',
   itemScope: true,
   itemType: 'https://schema.org/EnergyConsumptionDetails',
   ...props
  },
  children
 );
};

const HasEnergyConsumptionDetails: Type & {
 EnergyConsumptionDetails: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasEnergyConsumptionDetails',
   ...props
  },
  children
 );
};

HasEnergyConsumptionDetails.EnergyConsumptionDetails =
 EnergyConsumptionDetailsType;

export { HasEnergyConsumptionDetails };
