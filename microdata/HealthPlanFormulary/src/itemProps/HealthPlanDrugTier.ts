import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'healthPlanDrugTier',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const HealthPlanDrugTier: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'healthPlanDrugTier',
   ...props
  },
  children
 );
};

HealthPlanDrugTier.Text = TextType;

export { HealthPlanDrugTier };
