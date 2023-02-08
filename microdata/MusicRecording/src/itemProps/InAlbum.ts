import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicAlbumType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'inAlbum',
   itemScope: true,
   itemType: 'https://schema.org/MusicAlbum',
   ...props
  },
  children
 );
};

const InAlbum: Type & { MusicAlbum: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'inAlbum',
   ...props
  },
  children
 );
};

InAlbum.MusicAlbum = MusicAlbumType;

export { InAlbum };
