import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ParentTaxon: Type & {
 URL: Type;
 Taxon: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'parentTaxon',
   ...props
  },
  children
 );
};

ParentTaxon.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'parentTaxon',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

ParentTaxon.Taxon = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'parentTaxon',
   itemScope: true,
   itemType: 'https://schema.org/Taxon',
   ...props
  },
  children
 );
};

export { ParentTaxon };
