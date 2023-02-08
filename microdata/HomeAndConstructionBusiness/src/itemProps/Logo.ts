import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Logo: Type & {
 URL: Type;
 ImageObject: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'logo',
   ...props
  },
  children
 );
};

Logo.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'logo',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

Logo.ImageObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'logo',
   itemScope: true,
   itemType: 'https://schema.org/ImageObject',
   ...props
  },
  children
 );
};

export { Logo };
