import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicAlbumProductionTypeType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'albumProductionType',
   itemScope: true,
   itemType: 'https://schema.org/MusicAlbumProductionType',
   ...props
  },
  children
 );
};

const AlbumProductionType: Type & { MusicAlbumProductionType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'albumProductionType',
   ...props
  },
  children
 );
};

AlbumProductionType.MusicAlbumProductionType = MusicAlbumProductionTypeType;

export { AlbumProductionType };
