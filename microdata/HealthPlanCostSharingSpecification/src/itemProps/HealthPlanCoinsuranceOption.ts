import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'healthPlanCoinsuranceOption',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const HealthPlanCoinsuranceOption: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'healthPlanCoinsuranceOption',
   ...props
  },
  children
 );
};

HealthPlanCoinsuranceOption.Text = TextType;

export { HealthPlanCoinsuranceOption };
