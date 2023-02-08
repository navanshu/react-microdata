import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicReleaseType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'albumRelease',
   itemScope: true,
   itemType: 'https://schema.org/MusicRelease',
   ...props
  },
  children
 );
};

const AlbumRelease: Type & { MusicRelease: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'albumRelease',
   ...props
  },
  children
 );
};

AlbumRelease.MusicRelease = MusicReleaseType;

export { AlbumRelease };
