import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MediaObjectType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'mediaItemAppearance',
   itemScope: true,
   itemType: 'https://schema.org/MediaObject',
   ...props
  },
  children
 );
};

const MediaItemAppearance: Type & { MediaObject: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'mediaItemAppearance',
   ...props
  },
  children
 );
};

MediaItemAppearance.MediaObject = MediaObjectType;

export { MediaItemAppearance };
