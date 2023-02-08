import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LayoutImage: Type & {
 ImageObject: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'layoutImage',
   ...props
  },
  children
 );
};

LayoutImage.ImageObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'layoutImage',
   itemScope: true,
   itemType: 'https://schema.org/ImageObject',
   ...props
  },
  children
 );
};

LayoutImage.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'layoutImage',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { LayoutImage };
