import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Screenshot: Type & {
 ImageObject: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'screenshot',
   ...props
  },
  children
 );
};

Screenshot.ImageObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'screenshot',
   itemScope: true,
   itemType: 'https://schema.org/ImageObject',
   ...props
  },
  children
 );
};

Screenshot.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'screenshot',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { Screenshot };
