import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HasMolecularFunction: Type & {
 PropertyValue: Type;
 DefinedTerm: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMolecularFunction',
   ...props
  },
  children
 );
};

HasMolecularFunction.PropertyValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMolecularFunction',
   itemScope: true,
   itemType: 'https://schema.org/PropertyValue',
   ...props
  },
  children
 );
};

HasMolecularFunction.DefinedTerm = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMolecularFunction',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

HasMolecularFunction.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMolecularFunction',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { HasMolecularFunction };
