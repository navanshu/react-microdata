import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IsBasedOnUrl: Type & {
 URL: Type;
 CreativeWork: Type;
 Product: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isBasedOnUrl',
   ...props
  },
  children
 );
};

IsBasedOnUrl.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isBasedOnUrl',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

IsBasedOnUrl.CreativeWork = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isBasedOnUrl',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

IsBasedOnUrl.Product = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isBasedOnUrl',
   itemScope: true,
   itemType: 'https://schema.org/Product',
   ...props
  },
  children
 );
};

export { IsBasedOnUrl };
