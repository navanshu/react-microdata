import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Address: Type & {
 PostalAddress: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'address',
   ...props
  },
  children
 );
};

Address.PostalAddress = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'address',
   itemScope: true,
   itemType: 'https://schema.org/PostalAddress',
   ...props
  },
  children
 );
};

export { Address };
