import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HasRepresentation: Type & {
 PropertyValue: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasRepresentation',
   ...props
  },
  children
 );
};

HasRepresentation.PropertyValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasRepresentation',
   itemScope: true,
   itemType: 'https://schema.org/PropertyValue',
   ...props
  },
  children
 );
};

HasRepresentation.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasRepresentation',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { HasRepresentation };
