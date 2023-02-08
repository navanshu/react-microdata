import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IsVariantOf: Type & {
 ProductModel: Type;
 ProductGroup: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isVariantOf',
   ...props
  },
  children
 );
};

IsVariantOf.ProductModel = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isVariantOf',
   itemScope: true,
   itemType: 'https://schema.org/ProductModel',
   ...props
  },
  children
 );
};

IsVariantOf.ProductGroup = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isVariantOf',
   itemScope: true,
   itemType: 'https://schema.org/ProductGroup',
   ...props
  },
  children
 );
};

export { IsVariantOf };
