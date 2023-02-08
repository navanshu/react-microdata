import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Masthead: Type & {
 URL: Type;
 CreativeWork: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'masthead',
   ...props
  },
  children
 );
};

Masthead.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'masthead',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

Masthead.CreativeWork = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'masthead',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

export { Masthead };
