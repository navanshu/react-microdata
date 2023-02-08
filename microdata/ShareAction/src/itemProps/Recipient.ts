import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Recipient: Type & {
 Person: Type;
 Audience: Type;
 ContactPoint: Type;
 Organization: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'recipient',
   ...props
  },
  children
 );
};

Recipient.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'recipient',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

Recipient.Audience = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'recipient',
   itemScope: true,
   itemType: 'https://schema.org/Audience',
   ...props
  },
  children
 );
};

Recipient.ContactPoint = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'recipient',
   itemScope: true,
   itemType: 'https://schema.org/ContactPoint',
   ...props
  },
  children
 );
};

Recipient.Organization = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'recipient',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

export { Recipient };
