import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const WebFeed: Type & {
 DataFeed: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'webFeed',
   ...props
  },
  children
 );
};

WebFeed.DataFeed = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'webFeed',
   itemScope: true,
   itemType: 'https://schema.org/DataFeed',
   ...props
  },
  children
 );
};

WebFeed.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'webFeed',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { WebFeed };
