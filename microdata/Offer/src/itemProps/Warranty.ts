import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const WarrantyPromiseType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'warranty',
   itemScope: true,
   itemType: 'https://schema.org/WarrantyPromise',
   ...props
  },
  children
 );
};

const Warranty: Type & { WarrantyPromise: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'warranty',
   ...props
  },
  children
 );
};

Warranty.WarrantyPromise = WarrantyPromiseType;

export { Warranty };
