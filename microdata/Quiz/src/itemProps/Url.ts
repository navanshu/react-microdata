import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const URLType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'url',
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

const Url: Type & { URL: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'url',
   ...props
  },
  children
 );
};

Url.URL = URLType;

export { Url };
