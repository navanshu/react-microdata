import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Photos: Type & {
 ImageObject: Type;
 Photograph: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'photos',
   ...props
  },
  children
 );
};

Photos.ImageObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'photos',
   itemScope: true,
   itemType: 'https://schema.org/ImageObject',
   ...props
  },
  children
 );
};

Photos.Photograph = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'photos',
   itemScope: true,
   itemType: 'https://schema.org/Photograph',
   ...props
  },
  children
 );
};

export { Photos };
