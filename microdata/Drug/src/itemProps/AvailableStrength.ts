import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DrugStrengthType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableStrength',
   itemScope: true,
   itemType: 'https://schema.org/DrugStrength',
   ...props
  },
  children
 );
};

const AvailableStrength: Type & { DrugStrength: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'availableStrength',
   ...props
  },
  children
 );
};

AvailableStrength.DrugStrength = DrugStrengthType;

export { AvailableStrength };
