import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Caption: Type & {
 MediaObject: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'caption',
   ...props
  },
  children
 );
};

Caption.MediaObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'caption',
   itemScope: true,
   itemType: 'https://schema.org/MediaObject',
   ...props
  },
  children
 );
};

export { Caption };
