import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HealthPlanFormularyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'includesHealthPlanFormulary',
   itemScope: true,
   itemType: 'https://schema.org/HealthPlanFormulary',
   ...props
  },
  children
 );
};

const IncludesHealthPlanFormulary: Type & { HealthPlanFormulary: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'includesHealthPlanFormulary',
   ...props
  },
  children
 );
};

IncludesHealthPlanFormulary.HealthPlanFormulary = HealthPlanFormularyType;

export { IncludesHealthPlanFormulary };
