import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DataCatalogType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'includedDataCatalog',
   itemScope: true,
   itemType: 'https://schema.org/DataCatalog',
   ...props
  },
  children
 );
};

const IncludedDataCatalog: Type & { DataCatalog: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'includedDataCatalog',
   ...props
  },
  children
 );
};

IncludedDataCatalog.DataCatalog = DataCatalogType;

export { IncludedDataCatalog };
