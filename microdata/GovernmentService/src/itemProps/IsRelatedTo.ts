import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IsRelatedTo: Type & {
 Service: Type;
 Product: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isRelatedTo',
   ...props
  },
  children
 );
};

IsRelatedTo.Service = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isRelatedTo',
   itemScope: true,
   itemType: 'https://schema.org/Service',
   ...props
  },
  children
 );
};

IsRelatedTo.Product = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isRelatedTo',
   itemScope: true,
   itemType: 'https://schema.org/Product',
   ...props
  },
  children
 );
};

export { IsRelatedTo };
