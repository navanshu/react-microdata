import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DataCatalogType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'catalog',
   itemScope: true,
   itemType: 'https://schema.org/DataCatalog',
   ...props
  },
  children
 );
};

const Catalog: Type & { DataCatalog: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'catalog',
   ...props
  },
  children
 );
};

Catalog.DataCatalog = DataCatalogType;

export { Catalog };
