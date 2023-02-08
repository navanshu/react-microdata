import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CcRecipient: Type & {
 Person: Type;
 Organization: Type;
 ContactPoint: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ccRecipient',
   ...props
  },
  children
 );
};

CcRecipient.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ccRecipient',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

CcRecipient.Organization = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ccRecipient',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

CcRecipient.ContactPoint = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ccRecipient',
   itemScope: true,
   itemType: 'https://schema.org/ContactPoint',
   ...props
  },
  children
 );
};

export { CcRecipient };
