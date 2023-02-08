import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Identifier: Type & {
 URL: Type;
 PropertyValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'identifier',
   ...props
  },
  children
 );
};

Identifier.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'identifier',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

Identifier.PropertyValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'identifier',
   itemScope: true,
   itemType: 'https://schema.org/PropertyValue',
   ...props
  },
  children
 );
};

export { Identifier };
