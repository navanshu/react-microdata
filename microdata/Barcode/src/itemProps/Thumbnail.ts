import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ImageObjectType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'thumbnail',
   itemScope: true,
   itemType: 'https://schema.org/ImageObject',
   ...props
  },
  children
 );
};

const Thumbnail: Type & { ImageObject: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'thumbnail',
   ...props
  },
  children
 );
};

Thumbnail.ImageObject = ImageObjectType;

export { Thumbnail };
