import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OriginalMediaLink: Type & {
 URL: Type;
 MediaObject: Type;
 WebPage: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'originalMediaLink',
   ...props
  },
  children
 );
};

OriginalMediaLink.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'originalMediaLink',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

OriginalMediaLink.MediaObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'originalMediaLink',
   itemScope: true,
   itemType: 'https://schema.org/MediaObject',
   ...props
  },
  children
 );
};

OriginalMediaLink.WebPage = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'originalMediaLink',
   itemScope: true,
   itemType: 'https://schema.org/WebPage',
   ...props
  },
  children
 );
};

export { OriginalMediaLink };
