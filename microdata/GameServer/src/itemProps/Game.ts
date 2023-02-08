import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const VideoGameType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'game',
   itemScope: true,
   itemType: 'https://schema.org/VideoGame',
   ...props
  },
  children
 );
};

const Game: Type & { VideoGame: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'game',
   ...props
  },
  children
 );
};

Game.VideoGame = VideoGameType;

export { Game };
