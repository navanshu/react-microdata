import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OrderDate: Type & {
 Date: Type;
 DateTime: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'orderDate',
   ...props
  },
  children
 );
};

OrderDate.Date = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'orderDate',
   itemScope: true,
   itemType: 'https://schema.org/Date',
   ...props
  },
  children
 );
};

OrderDate.DateTime = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'orderDate',
   itemScope: true,
   itemType: 'https://schema.org/DateTime',
   ...props
  },
  children
 );
};

export { OrderDate };
