import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Model: Type & {
 ProductModel: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'model',
   ...props
  },
  children
 );
};

Model.ProductModel = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'model',
   itemScope: true,
   itemType: 'https://schema.org/ProductModel',
   ...props
  },
  children
 );
};

export { Model };
