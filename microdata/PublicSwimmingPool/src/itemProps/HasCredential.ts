import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EducationalOccupationalCredentialType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasCredential',
   itemScope: true,
   itemType: 'https://schema.org/EducationalOccupationalCredential',
   ...props
  },
  children
 );
};

const HasCredential: Type & { EducationalOccupationalCredential: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasCredential',
   ...props
  },
  children
 );
};

HasCredential.EducationalOccupationalCredential =
 EducationalOccupationalCredentialType;

export { HasCredential };
