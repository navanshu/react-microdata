import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ComprisedOf: Type & {
 AnatomicalStructure: Type;
 AnatomicalSystem: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'comprisedOf',
   ...props
  },
  children
 );
};

ComprisedOf.AnatomicalStructure = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'comprisedOf',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalStructure',
   ...props
  },
  children
 );
};

ComprisedOf.AnatomicalSystem = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'comprisedOf',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalSystem',
   ...props
  },
  children
 );
};

export { ComprisedOf };
