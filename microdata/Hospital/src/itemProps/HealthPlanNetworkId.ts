import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'healthPlanNetworkId',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const HealthPlanNetworkId: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'healthPlanNetworkId',
   ...props
  },
  children
 );
};

HealthPlanNetworkId.Text = TextType;

export { HealthPlanNetworkId };
