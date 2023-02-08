import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EducationRequirements: Type & {
 EducationalOccupationalCredential: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'educationRequirements',
   ...props
  },
  children
 );
};

EducationRequirements.EducationalOccupationalCredential = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'educationRequirements',
   itemScope: true,
   itemType: 'https://schema.org/EducationalOccupationalCredential',
   ...props
  },
  children
 );
};

export { EducationRequirements };
