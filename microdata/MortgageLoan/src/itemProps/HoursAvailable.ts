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
   itemProp: 'hoursAvailable',
   itemScope: true,
   itemType: 'https://schema.org/OpeningHoursSpecification',
   ...props
  },
  children
 );
};

const HoursAvailable: Type & { OpeningHoursSpecification: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hoursAvailable',
   ...props
  },
  children
 );
};

HoursAvailable.OpeningHoursSpecification = OpeningHoursSpecificationType;

export { HoursAvailable };
