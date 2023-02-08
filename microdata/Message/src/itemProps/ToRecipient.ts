import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ToRecipient: Type & {
 ContactPoint: Type;
 Person: Type;
 Audience: Type;
 Organization: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'toRecipient',
   ...props
  },
  children
 );
};

ToRecipient.ContactPoint = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'toRecipient',
   itemScope: true,
   itemType: 'https://schema.org/ContactPoint',
   ...props
  },
  children
 );
};

ToRecipient.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'toRecipient',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

ToRecipient.Audience = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'toRecipient',
   itemScope: true,
   itemType: 'https://schema.org/Audience',
   ...props
  },
  children
 );
};

ToRecipient.Organization = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'toRecipient',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

export { ToRecipient };
