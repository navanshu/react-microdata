import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Photo: Type & {
 Photograph: Type;
 ImageObject: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'photo',
   ...props
  },
  children
 );
};

Photo.Photograph = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'photo',
   itemScope: true,
   itemType: 'https://schema.org/Photograph',
   ...props
  },
  children
 );
};

Photo.ImageObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'photo',
   itemScope: true,
   itemType: 'https://schema.org/ImageObject',
   ...props
  },
  children
 );
};

export { Photo };
