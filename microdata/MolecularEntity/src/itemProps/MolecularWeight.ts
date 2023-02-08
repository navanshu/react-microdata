import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MolecularWeight: Type & {
 QuantitativeValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'molecularWeight',
   ...props
  },
  children
 );
};

MolecularWeight.QuantitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'molecularWeight',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

export { MolecularWeight };
