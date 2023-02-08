import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicAlbumType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'album',
   itemScope: true,
   itemType: 'https://schema.org/MusicAlbum',
   ...props
  },
  children
 );
};

const Album: Type & { MusicAlbum: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'album',
   ...props
  },
  children
 );
};

Album.MusicAlbum = MusicAlbumType;

export { Album };
