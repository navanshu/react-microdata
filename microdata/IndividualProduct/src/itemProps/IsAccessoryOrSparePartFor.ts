import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ProductType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isAccessoryOrSparePartFor',
   itemScope: true,
   itemType: 'https://schema.org/Product',
   ...props
  },
  children
 );
};

const IsAccessoryOrSparePartFor: Type & { Product: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isAccessoryOrSparePartFor',
   ...props
  },
  children
 );
};

IsAccessoryOrSparePartFor.Product = ProductType;

export { IsAccessoryOrSparePartFor };
