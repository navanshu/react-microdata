import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Qualifications: Type & {
 EducationalOccupationalCredential: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'qualifications',
   ...props
  },
  children
 );
};

Qualifications.EducationalOccupationalCredential = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'qualifications',
   itemScope: true,
   itemType: 'https://schema.org/EducationalOccupationalCredential',
   ...props
  },
  children
 );
};

export { Qualifications };
