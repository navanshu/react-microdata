import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicAlbumReleaseTypeType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'albumReleaseType',
   itemScope: true,
   itemType: 'https://schema.org/MusicAlbumReleaseType',
   ...props
  },
  children
 );
};

const AlbumReleaseType: Type & { MusicAlbumReleaseType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'albumReleaseType',
   ...props
  },
  children
 );
};

AlbumReleaseType.MusicAlbumReleaseType = MusicAlbumReleaseTypeType;

export { AlbumReleaseType };
