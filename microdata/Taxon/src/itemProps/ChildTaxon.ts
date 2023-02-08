import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ChildTaxon: Type & {
 Taxon: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'childTaxon',
   ...props
  },
  children
 );
};

ChildTaxon.Taxon = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'childTaxon',
   itemScope: true,
   itemType: 'https://schema.org/Taxon',
   ...props
  },
  children
 );
};

ChildTaxon.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'childTaxon',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { ChildTaxon };
