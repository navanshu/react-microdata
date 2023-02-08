import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AlumniOf: Type & {
 EducationalOrganization: Type;
 Organization: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'alumniOf',
   ...props
  },
  children
 );
};

AlumniOf.EducationalOrganization = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'alumniOf',
   itemScope: true,
   itemType: 'https://schema.org/EducationalOrganization',
   ...props
  },
  children
 );
};

AlumniOf.Organization = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'alumniOf',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

export { AlumniOf };
