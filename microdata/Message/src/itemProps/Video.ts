import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Video: Type & {
 Clip: Type;
 VideoObject: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'video',
   ...props
  },
  children
 );
};

Video.Clip = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'video',
   itemScope: true,
   itemType: 'https://schema.org/Clip',
   ...props
  },
  children
 );
};

Video.VideoObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'video',
   itemScope: true,
   itemType: 'https://schema.org/VideoObject',
   ...props
  },
  children
 );
};

export { Video };
