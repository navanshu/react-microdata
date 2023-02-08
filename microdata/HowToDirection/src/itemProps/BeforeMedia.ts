import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BeforeMedia: Type & {
 URL: Type;
 MediaObject: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'beforeMedia',
   ...props
  },
  children
 );
};

BeforeMedia.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'beforeMedia',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

BeforeMedia.MediaObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'beforeMedia',
   itemScope: true,
   itemType: 'https://schema.org/MediaObject',
   ...props
  },
  children
 );
};

export { BeforeMedia };
