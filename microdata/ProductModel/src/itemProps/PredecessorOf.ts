import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ProductModelType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'predecessorOf',
   itemScope: true,
   itemType: 'https://schema.org/ProductModel',
   ...props
  },
  children
 );
};

const PredecessorOf: Type & { ProductModel: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'predecessorOf',
   ...props
  },
  children
 );
};

PredecessorOf.ProductModel = ProductModelType;

export { PredecessorOf };
