import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TaxonRank: Type & {
 PropertyValue: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'taxonRank',
   ...props
  },
  children
 );
};

TaxonRank.PropertyValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'taxonRank',
   itemScope: true,
   itemType: 'https://schema.org/PropertyValue',
   ...props
  },
  children
 );
};

TaxonRank.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'taxonRank',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { TaxonRank };
