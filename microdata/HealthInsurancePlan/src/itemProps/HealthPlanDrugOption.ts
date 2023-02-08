import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'healthPlanDrugOption',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const HealthPlanDrugOption: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'healthPlanDrugOption',
   ...props
  },
  children
 );
};

HealthPlanDrugOption.Text = TextType;

export { HealthPlanDrugOption };
