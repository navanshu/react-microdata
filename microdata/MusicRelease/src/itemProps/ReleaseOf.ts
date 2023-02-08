import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicAlbumType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'releaseOf',
   itemScope: true,
   itemType: 'https://schema.org/MusicAlbum',
   ...props
  },
  children
 );
};

const ReleaseOf: Type & { MusicAlbum: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'releaseOf',
   ...props
  },
  children
 );
};

ReleaseOf.MusicAlbum = MusicAlbumType;

export { ReleaseOf };
