import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Breadcrumb: Type & {
 BreadcrumbList: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'breadcrumb',
   ...props
  },
  children
 );
};

Breadcrumb.BreadcrumbList = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'breadcrumb',
   itemScope: true,
   itemType: 'https://schema.org/BreadcrumbList',
   ...props
  },
  children
 );
};

export { Breadcrumb };
