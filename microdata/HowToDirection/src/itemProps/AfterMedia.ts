import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AfterMedia: Type & {
 URL: Type;
 MediaObject: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'afterMedia',
   ...props
  },
  children
 );
};

AfterMedia.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'afterMedia',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

AfterMedia.MediaObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'afterMedia',
   itemScope: true,
   itemType: 'https://schema.org/MediaObject',
   ...props
  },
  children
 );
};

export { AfterMedia };
