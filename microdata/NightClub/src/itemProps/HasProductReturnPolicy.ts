import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ProductReturnPolicyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasProductReturnPolicy',
   itemScope: true,
   itemType: 'https://schema.org/ProductReturnPolicy',
   ...props
  },
  children
 );
};

const HasProductReturnPolicy: Type & { ProductReturnPolicy: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasProductReturnPolicy',
   ...props
  },
  children
 );
};

HasProductReturnPolicy.ProductReturnPolicy = ProductReturnPolicyType;

export { HasProductReturnPolicy };
