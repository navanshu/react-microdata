import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OpeningHoursSpecification: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'openingHoursSpecification',
   itemScope: true,
   itemType: 'https://schema.org/OpeningHoursSpecification',
   ...props
  },
  children
 );
};

export { OpeningHoursSpecification };
