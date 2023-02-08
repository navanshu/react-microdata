import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MaximumDoseScheduleType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'maximumIntake',
   itemScope: true,
   itemType: 'https://schema.org/MaximumDoseSchedule',
   ...props
  },
  children
 );
};

const MaximumIntake: Type & { MaximumDoseSchedule: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'maximumIntake',
   ...props
  },
  children
 );
};

MaximumIntake.MaximumDoseSchedule = MaximumDoseScheduleType;

export { MaximumIntake };
