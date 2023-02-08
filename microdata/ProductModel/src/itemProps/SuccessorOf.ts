import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ProductModelType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'successorOf',
   itemScope: true,
   itemType: 'https://schema.org/ProductModel',
   ...props
  },
  children
 );
};

const SuccessorOf: Type & { ProductModel: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'successorOf',
   ...props
  },
  children
 );
};

SuccessorOf.ProductModel = ProductModelType;

export { SuccessorOf };
