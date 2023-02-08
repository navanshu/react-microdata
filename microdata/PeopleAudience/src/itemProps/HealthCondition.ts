import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalConditionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'healthCondition',
   itemScope: true,
   itemType: 'https://schema.org/MedicalCondition',
   ...props
  },
  children
 );
};

const HealthCondition: Type & { MedicalCondition: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'healthCondition',
   ...props
  },
  children
 );
};

HealthCondition.MedicalCondition = MedicalConditionType;

export { HealthCondition };
