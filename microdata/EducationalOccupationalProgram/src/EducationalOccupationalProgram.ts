import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';
type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EducationalOccupationalProgram: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemType: 'https://schema.org/EducationalOccupationalProgram',
   ...props
  },
  children
 );
};

export { EducationalOccupationalProgram };
