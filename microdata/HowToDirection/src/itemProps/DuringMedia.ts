import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DuringMedia: Type & {
 URL: Type;
 MediaObject: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'duringMedia',
   ...props
  },
  children
 );
};

DuringMedia.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'duringMedia',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

DuringMedia.MediaObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'duringMedia',
   itemScope: true,
   itemType: 'https://schema.org/MediaObject',
   ...props
  },
  children
 );
};

export { DuringMedia };
