import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HasMap: Type & {
 URL: Type;
 Map: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMap',
   ...props
  },
  children
 );
};

HasMap.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMap',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

HasMap.Map = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasMap',
   itemScope: true,
   itemType: 'https://schema.org/Map',
   ...props
  },
  children
 );
};

export { HasMap };
