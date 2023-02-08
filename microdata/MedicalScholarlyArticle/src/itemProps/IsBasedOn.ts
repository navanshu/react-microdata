import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IsBasedOn: Type & {
 CreativeWork: Type;
 URL: Type;
 Product: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isBasedOn',
   ...props
  },
  children
 );
};

IsBasedOn.CreativeWork = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isBasedOn',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

IsBasedOn.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isBasedOn',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

IsBasedOn.Product = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isBasedOn',
   itemScope: true,
   itemType: 'https://schema.org/Product',
   ...props
  },
  children
 );
};

export { IsBasedOn };
