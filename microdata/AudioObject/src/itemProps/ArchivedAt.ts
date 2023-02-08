import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ArchivedAt: Type & {
 WebPage: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'archivedAt',
   ...props
  },
  children
 );
};

ArchivedAt.WebPage = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'archivedAt',
   itemScope: true,
   itemType: 'https://schema.org/WebPage',
   ...props
  },
  children
 );
};

ArchivedAt.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'archivedAt',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { ArchivedAt };
