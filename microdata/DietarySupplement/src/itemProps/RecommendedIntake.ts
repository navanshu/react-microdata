import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RecommendedDoseScheduleType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'recommendedIntake',
   itemScope: true,
   itemType: 'https://schema.org/RecommendedDoseSchedule',
   ...props
  },
  children
 );
};

const RecommendedIntake: Type & { RecommendedDoseSchedule: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'recommendedIntake',
   ...props
  },
  children
 );
};

RecommendedIntake.RecommendedDoseSchedule = RecommendedDoseScheduleType;

export { RecommendedIntake };
