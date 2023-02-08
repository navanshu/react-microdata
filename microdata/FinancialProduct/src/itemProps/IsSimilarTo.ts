import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IsSimilarTo: Type & {
 Service: Type;
 Product: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isSimilarTo',
   ...props
  },
  children
 );
};

IsSimilarTo.Service = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isSimilarTo',
   itemScope: true,
   itemType: 'https://schema.org/Service',
   ...props
  },
  children
 );
};

IsSimilarTo.Product = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isSimilarTo',
   itemScope: true,
   itemType: 'https://schema.org/Product',
   ...props
  },
  children
 );
};

export { IsSimilarTo };
