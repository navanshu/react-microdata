import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DataCatalogType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'includedInDataCatalog',
   itemScope: true,
   itemType: 'https://schema.org/DataCatalog',
   ...props
  },
  children
 );
};

const IncludedInDataCatalog: Type & { DataCatalog: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'includedInDataCatalog',
   ...props
  },
  children
 );
};

IncludedInDataCatalog.DataCatalog = DataCatalogType;

export { IncludedInDataCatalog };
