import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'healthPlanId',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const HealthPlanId: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'healthPlanId',
   ...props
  },
  children
 );
};

HealthPlanId.Text = TextType;

export { HealthPlanId };
