import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicPlaylistType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'inPlaylist',
   itemScope: true,
   itemType: 'https://schema.org/MusicPlaylist',
   ...props
  },
  children
 );
};

const InPlaylist: Type & { MusicPlaylist: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'inPlaylist',
   ...props
  },
  children
 );
};

InPlaylist.MusicPlaylist = MusicPlaylistType;

export { InPlaylist };
