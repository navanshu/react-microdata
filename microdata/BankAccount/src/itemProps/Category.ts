import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Category: Type & {
 URL: Type;
 PhysicalActivityCategory: Type;
 Thing: Type;
 CategoryCode: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'category',
   ...props
  },
  children
 );
};

Category.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'category',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

Category.PhysicalActivityCategory = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'category',
   itemScope: true,
   itemType: 'https://schema.org/PhysicalActivityCategory',
   ...props
  },
  children
 );
};

Category.Thing = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'category',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

Category.CategoryCode = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'category',
   itemScope: true,
   itemType: 'https://schema.org/CategoryCode',
   ...props
  },
  children
 );
};

export { Category };
