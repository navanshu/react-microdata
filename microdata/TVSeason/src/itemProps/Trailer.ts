import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const VideoObjectType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'trailer',
   itemScope: true,
   itemType: 'https://schema.org/VideoObject',
   ...props
  },
  children
 );
};

const Trailer: Type & { VideoObject: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'trailer',
   ...props
  },
  children
 );
};

Trailer.VideoObject = VideoObjectType;

export { Trailer };
