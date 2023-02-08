import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicAlbumType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'albums',
   itemScope: true,
   itemType: 'https://schema.org/MusicAlbum',
   ...props
  },
  children
 );
};

const Albums: Type & { MusicAlbum: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'albums',
   ...props
  },
  children
 );
};

Albums.MusicAlbum = MusicAlbumType;

export { Albums };
