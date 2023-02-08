import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TaxonomicRange: Type & {
 URL: Type;
 DefinedTerm: Type;
 Taxon: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'taxonomicRange',
   ...props
  },
  children
 );
};

TaxonomicRange.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'taxonomicRange',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

TaxonomicRange.DefinedTerm = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'taxonomicRange',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

TaxonomicRange.Taxon = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'taxonomicRange',
   itemScope: true,
   itemType: 'https://schema.org/Taxon',
   ...props
  },
  children
 );
};

export { TaxonomicRange };
