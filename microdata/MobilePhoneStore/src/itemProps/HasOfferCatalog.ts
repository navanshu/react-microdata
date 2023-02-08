import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OfferCatalogType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasOfferCatalog',
   itemScope: true,
   itemType: 'https://schema.org/OfferCatalog',
   ...props
  },
  children
 );
};

const HasOfferCatalog: Type & { OfferCatalog: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasOfferCatalog',
   ...props
  },
  children
 );
};

HasOfferCatalog.OfferCatalog = OfferCatalogType;

export { HasOfferCatalog };
