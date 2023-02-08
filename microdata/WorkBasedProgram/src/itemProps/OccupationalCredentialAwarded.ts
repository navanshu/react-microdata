import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OccupationalCredentialAwarded: Type & {
 EducationalOccupationalCredential: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'occupationalCredentialAwarded',
   ...props
  },
  children
 );
};

OccupationalCredentialAwarded.EducationalOccupationalCredential = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'occupationalCredentialAwarded',
   itemScope: true,
   itemType: 'https://schema.org/EducationalOccupationalCredential',
   ...props
  },
  children
 );
};

OccupationalCredentialAwarded.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'occupationalCredentialAwarded',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { OccupationalCredentialAwarded };
