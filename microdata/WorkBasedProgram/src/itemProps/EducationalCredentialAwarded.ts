import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EducationalCredentialAwarded: Type & {
 URL: Type;
 EducationalOccupationalCredential: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'educationalCredentialAwarded',
   ...props
  },
  children
 );
};

EducationalCredentialAwarded.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'educationalCredentialAwarded',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

EducationalCredentialAwarded.EducationalOccupationalCredential = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'educationalCredentialAwarded',
   itemScope: true,
   itemType: 'https://schema.org/EducationalOccupationalCredential',
   ...props
  },
  children
 );
};

export { EducationalCredentialAwarded };
