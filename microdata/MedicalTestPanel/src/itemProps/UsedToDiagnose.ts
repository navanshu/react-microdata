import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalConditionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'usedToDiagnose',
   itemScope: true,
   itemType: 'https://schema.org/MedicalCondition',
   ...props
  },
  children
 );
};

const UsedToDiagnose: Type & { MedicalCondition: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'usedToDiagnose',
   ...props
  },
  children
 );
};

UsedToDiagnose.MedicalCondition = MedicalConditionType;

export { UsedToDiagnose };
