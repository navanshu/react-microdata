import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalConditionStageType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'stage',
   itemScope: true,
   itemType: 'https://schema.org/MedicalConditionStage',
   ...props
  },
  children
 );
};

const Stage: Type & { MedicalConditionStage: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'stage',
   ...props
  },
  children
 );
};

Stage.MedicalConditionStage = MedicalConditionStageType;

export { Stage };
