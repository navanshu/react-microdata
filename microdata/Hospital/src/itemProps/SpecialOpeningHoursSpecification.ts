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
   itemProp: 'specialOpeningHoursSpecification',
   itemScope: true,
   itemType: 'https://schema.org/OpeningHoursSpecification',
   ...props
  },
  children
 );
};

const SpecialOpeningHoursSpecification: Type & {
 OpeningHoursSpecification: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'specialOpeningHoursSpecification',
   ...props
  },
  children
 );
};

SpecialOpeningHoursSpecification.OpeningHoursSpecification =
 OpeningHoursSpecificationType;

export { SpecialOpeningHoursSpecification };
