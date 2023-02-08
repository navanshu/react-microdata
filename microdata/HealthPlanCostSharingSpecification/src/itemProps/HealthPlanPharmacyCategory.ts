import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'healthPlanPharmacyCategory',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const HealthPlanPharmacyCategory: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'healthPlanPharmacyCategory',
   ...props
  },
  children
 );
};

HealthPlanPharmacyCategory.Text = TextType;

export { HealthPlanPharmacyCategory };
