import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OpeningHoursSpecificationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'businessDays',
   itemScope: true,
   itemType: 'https://schema.org/OpeningHoursSpecification',
   ...props
  },
  children
 );
};

const BusinessDays: Type & { OpeningHoursSpecification: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'businessDays',
   ...props
  },
  children
 );
};

BusinessDays.OpeningHoursSpecification = OpeningHoursSpecificationType;

export { BusinessDays };
