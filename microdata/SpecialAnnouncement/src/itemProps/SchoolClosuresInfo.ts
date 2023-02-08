import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SchoolClosuresInfo: Type & {
 WebContent: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'schoolClosuresInfo',
   ...props
  },
  children
 );
};

SchoolClosuresInfo.WebContent = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'schoolClosuresInfo',
   itemScope: true,
   itemType: 'https://schema.org/WebContent',
   ...props
  },
  children
 );
};

SchoolClosuresInfo.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'schoolClosuresInfo',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { SchoolClosuresInfo };
