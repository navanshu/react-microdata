import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const KnowsAbout: Type & {
 URL: Type;
 Thing: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'knowsAbout',
   ...props
  },
  children
 );
};

KnowsAbout.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'knowsAbout',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

KnowsAbout.Thing = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'knowsAbout',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

export { KnowsAbout };
