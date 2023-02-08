import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const InCodeSet: Type & {
 CategoryCodeSet: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'inCodeSet',
   ...props
  },
  children
 );
};

InCodeSet.CategoryCodeSet = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'inCodeSet',
   itemScope: true,
   itemType: 'https://schema.org/CategoryCodeSet',
   ...props
  },
  children
 );
};

InCodeSet.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'inCodeSet',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { InCodeSet };
